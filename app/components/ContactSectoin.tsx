import { send } from 'emailjs-com';
import {useEffect, useState} from "react";
import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import useWindowDimensions from "@/app/hooks/useWindowSize";
import clsx from "clsx";

export default function ContactSection(props: { onActive?: () => void; })
{
    const [sentEmail, setSentEmail] = useState<boolean>();
    
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Isaac',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (toSend.from_name.trim() == "") return;
        if (toSend.reply_to.trim() == "") return;
        if (toSend.message.trim() == "") return;
        
        if (localStorage.getItem("sentEmail") === "true")
        {
            setSentEmail(true);
            
            setToSend({
                ...toSend,
                from_name: "",
                message: "",
                reply_to: ""
            });
            
            return;
        } else {
            localStorage.setItem("sentEmail", "true");
        }
        
        send(
            'service_6ovzjs7',
            'template_ie948sr',
            toSend,
            'C9aVAohNu7jHYy1OU'
        ).then(() => {
            setSentEmail(true);
        });

        setToSend({
            ...toSend,
            from_name: "",
            message: "",
            reply_to: ""
        });
    };

    const handleChange = (e: any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const [visible, setVisible] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setVisible(width < 1000);
    }, [width])
    
    return (
        <section>
            <Sensor onChange={(vis: boolean) => {
                setVisible(true);
                if (vis)
                props.onActive?.();
            }}>
            <FadeIn visible={visible}>
                <p className={clsx("text-green-400 text-center mb-5", {
                    "hidden": !sentEmail
                })}>*Your email has been sent!</p>
                <form className="flex flex-col space-y-3 w-[300px] md:w-[500px] lg:w-[600px] mx-auto" onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input
                        className="h-[45px] rounded p-3 bg-true-gray-800 text-white"
                        type='text'
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />

                    <label>Message:</label>
                    <textarea
                        className="h-[150px] rounded p-3 bg-true-gray-800 text-white"
                        name='message'
                        value={toSend.message}
                        onChange={handleChange}
                    />

                    <label>Your Email:</label>
                    <input
                        className="h-[45px] rounded p-3 bg-true-gray-800 text-white"
                        type='text'
                        name='reply_to'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <div className="mx-auto">
                        <button
                            className="mt-10 px-4 py-2 aria-pressed:scale-105 border border-brand-50/[0.2] hover:border-transparent hover:bg-brand-500 transition-colors duration-200 rounded-lg font-bold"
                            type='submit'>{sentEmail ? "Sent!" : "Send"}
                        </button>
                    </div>
                </form>
            </FadeIn>
            </Sensor>
        </section>
    )
}
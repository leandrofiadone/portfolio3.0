import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

const Contact = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:leanfiadone@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="h-screen flex relative flex-column text-center md:text-left md-flex:row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute sm:top-20 top-16 uppercase font-['Electrolize'] tracking-[20px] text-gray-500 xl:text-2xl sm:text-lg text-sm font-['Electrolize']">
				Contact
			</h3>
			<div className="flex flex-col md:space-y-6  space-y-5 font-['Electrolize']">
				<h4 className="xl:text-4xl  sm:text-lg text-base font-semibold text-center">
					I have just what you need.{" "}
					<span className="decoration-[#F7AB0A]/50 underline">Lets talk.</span>
				</h4>
				<div className="flex items-center space-x-5 justify-center">
					<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-lg text-base">+5491151275282</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-lg text-base">
						leanfiadone@gmail.com
					</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-lg text-base">
						Buenos Aires, Argentina
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-1 w-fit mx-auto">
					<div className="flex-space-x-2 sm:text-base text-xs ">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="text"
						/>
					</div>

					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>

					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#F7AB0A] xl:py-4 md:py-3 py-2 px-10 rounded-md text-black font-bold">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

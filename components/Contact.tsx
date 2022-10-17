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
		<div className="h-screen flex relative flex-column text-center md:text-left md-flex:row max-w-7xl lg:px-10 px-5 justify-evenly mx-auto items-center">
			<h3 className="absolute xl:top-20 sm:top-16 top-14 uppercase font-['Electrolize'] lg:tracking-[20px] tracking-[14px] text-gray-500 xl:text-2xl lg:text-lg text-sm font-['Electrolize']">
				Contact
			</h3>
			<div className="flex flex-col lg:pt-8 pt-5 space-y-2 font-['Electrolize']">
				<h4 className="xl:text-4xl  sm:text-lg text-base font-semibold text-center">
					I have just what you need.{" "}
					<span className="decoration-[#F7AB0A]/50 underline">Lets talk.</span>
				</h4>
				<div className="flex items-center space-x-5 justify-center">
					<PhoneIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">+5491151275282</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<EnvelopeIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">
						leanfiadone@gmail.com
					</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<MapPinIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">
						Buenos Aires, Argentina
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-1 w-fit mx-auto">
					<div className="flex-space-x-2 xl:text-sm text-xs ">
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

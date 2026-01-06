import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {
	pageInfo?: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:leanfiadone@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="min-h-screen flex relative flex-column text-center md:text-left md-flex:row
			max-w-7xl 2xl:max-w-[1400px] lg:px-10 px-5 justify-evenly mx-auto items-center py-20">
			<h3 className="hidden sm:block absolute xl:top-20 sm:top-16 top-14 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#00DA97] text-xl sm:text-2xl font-['Electrolize']">
				Contact
			</h3>
			<div className="flex flex-col lg:pt-8 pt-5 space-y-2 font-['Electrolize']">
				<h4 className="xl:text-4xl  sm:text-lg text-base font-semibold text-center">
					{pageInfo?.contactTitle || "I got what you need"}{" "}
					<span className="decoration-[#F7AB0A]/50 underline">Let&apos;s talk.</span>
				</h4>
				<div className="flex items-center space-x-5 justify-center">
					<PhoneIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">
						{pageInfo?.phoneNumber || "+5491151275282"}
					</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<EnvelopeIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">
						{pageInfo?.email || "leanfiadone@gmail.com"}
					</p>
				</div>

				<div className="flex items-center space-x-5 justify-center">
					<MapPinIcon className="text-[#F7AB0A] xl:h-7 h-4 w-7 animate-pulse" />
					<p className="xl:text-2xl  sm:text-sm text-base">
						{pageInfo?.adress || "Buenos Aires, Argentina"}
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
					aria-label="Contact form">
					<div className="flex flex-col space-y-2 xl:text-sm text-xs">
						<div className="flex flex-col">
							<input
								{...register("name", {
									required: "Name is required",
									minLength: {
										value: 2,
										message: "Name must be at least 2 characters",
									},
								})}
								placeholder="Name *"
								className={`contactInput ${
									errors.name ? "border-red-500" : ""
								}`}
								type="text"
							/>
							{errors.name && (
								<p className="text-red-500 text-xs mt-1">
									{errors.name.message}
								</p>
							)}
						</div>

						<div className="flex flex-col">
							<input
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid email address",
									},
								})}
								placeholder="Email *"
								className={`contactInput ${
									errors.email ? "border-red-500" : ""
								}`}
								type="email"
							/>
							{errors.email && (
								<p className="text-red-500 text-xs mt-1">
									{errors.email.message}
								</p>
							)}
						</div>
					</div>

					<div className="flex flex-col">
						<input
							{...register("subject", {
								required: "Subject is required",
								minLength: {
									value: 3,
									message: "Subject must be at least 3 characters",
								},
							})}
							placeholder="Subject *"
							className={`contactInput ${
								errors.subject ? "border-red-500" : ""
							}`}
							type="text"
						/>
						{errors.subject && (
							<p className="text-red-500 text-xs mt-1">
								{errors.subject.message}
							</p>
						)}
					</div>

					<div className="flex flex-col">
						<textarea
							{...register("message", {
								required: "Message is required",
								minLength: {
									value: 10,
									message: "Message must be at least 10 characters",
								},
							})}
							placeholder="Message *"
							className={`contactInput ${
								errors.message ? "border-red-500" : ""
							}`}
						/>
						{errors.message && (
							<p className="text-red-500 text-xs mt-1">
								{errors.message.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="bg-[#F7AB0A] xl:py-4 md:py-3 py-2 px-10 rounded-md text-black font-bold
							disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d19108] transition-colors">
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

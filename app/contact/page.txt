import React from 'react';

const Contact: React.FC = () => {
    const handleFormSubmit = async (formData: FormData) => {
        'use server';
        const firstName = formData.get('first-name') as string;
        const lastName = formData.get('last-name') as string;
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;
    
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
    
        // You can add further logic here, such as sending the data to an API
    };
    return (
        <main className="h-auto my-auto flex w-full justify-between flex-col items-center lg:flex-row md:flex-row">
            <div className="w-full lg:w-1/2 md:w-1/2">
                <div className="flex flex-col p-12 gap-4">
                    <h2 className="text-center text-4xl font-bold">Contact</h2>
                    <p className="text-center">Looking forward to hearing from you!</p>
                    <h4 className="text-2xl font-bold text-center">Email</h4>
                    <p className="text-center">monjardinelijah120@gmail.com</p>
                    <h4 className="text-2xl font-bold text-center">Phone</h4>
                    <p className="text-center">+63 905 523 8119</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 md:w-1/2 flex items-center flex-col">
                <form className="w-full max-w-lg" action={handleFormSubmit}>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="first-name"
                            >
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="first-name"
                                name="first-name"
                                type="text"
                                placeholder="Your first name"
                                required
                            />
                            
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="last-name"
                            >
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="last-name"
                                name="last-name"
                                type="text"
                                placeholder="Your last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dark  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                           
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="subject"
                            >
                                Subject
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Enter the subject"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                rows={3}
                                style={{ resize: 'none' }}
                                required
                            />
                            <p className="text-gray-600 text-xs italic">
                                Feel free to write as much as you&rsquo;d like.
                            </p>
                        </div>
                    </div>
                    <button type="submit" className="ms-auto me-3 px-5 py-2 rounded-lg bg-dark text-white hover:bg-darkgray hover:text-dark flex justify-center items-center gap-2 transition duration-500 ease-out">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;

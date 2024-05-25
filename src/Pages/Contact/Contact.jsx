import { Helmet } from 'react-helmet';
import contact from '../../assets/contact/banner.jpg'
import Cover from '../Shared/Cover/Cover';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Jj Restaurant | Contact</title>
            </Helmet>
            <div>
                <Cover img={contact} title="Contact Us" description="Would you like to try a dish?" />
                <SectionTitle heading="Our Location" subHeading="---Visit Us---" />
                <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number*</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message*</span>
                                </label>
                                <textarea cols={10} rows={5} className='textarea textarea-bordered'>

                                </textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <SectionTitle heading="Contact Form" subHeading="---Send Us a Message---" />
            </div>
        </>
    );
};

export default Contact;
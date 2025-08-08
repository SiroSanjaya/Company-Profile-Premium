import { Helmet } from 'react-helmet-async';
import AdvancedContactForm from '../components/AdvancedContactForm';

const Contact = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Contact – Get in Touch</title>
        <meta
          name="description"
          content="Have a question or want to work together? Send us a message and we'll respond as soon as possible."
        />
      </Helmet>
      <AdvancedContactForm />
    </div>
  );
};

export default Contact;

import { useState } from 'react';
import Newsletter from './FooterNewsletter';

const NewsletterLogic = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);

    setEmail('');
  };
  return <Newsletter email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} />;
};
export default NewsletterLogic;

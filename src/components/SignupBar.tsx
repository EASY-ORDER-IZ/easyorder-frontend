import { useState } from 'react';
import { XIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMobile from '@/hooks/useMobile';

const SignupBar = () => {
  const [visible, setVisible] = useState(true);
  const [, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const isMobile = useMobile(768);

  const switchDialog = (target: 'sign-in' | 'sign-up' | 'forget-password' | 'email-verfiy') => {
    setSearchParams({ auth: target });
  };
  if (!visible) return null;

  return (
    <div className="bg-accent-primary flex w-full items-center justify-between px-3 py-2">
      <div></div>
      <div className="flex items-center justify-center gap-2">
        <span className="header-text">{t('signupBar.title')}</span>

        <span
          onClick={() => switchDialog('sign-up')}
          className="link-text !text-background cursor-pointer"
        >
          {t('signupBar.joinNow')}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <XIcon
          onClick={() => setVisible(false)}
          size={isMobile ? 12 : 18}
          className="text-background absolute right-7 cursor-pointer transition hover:opacity-70 sm:right-22"
        />
      </div>
    </div>
  );
};

export default SignupBar;

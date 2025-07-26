import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-doodle-pencil border-opacity-30 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-sketch text-muted-foreground mb-4">
          {t('footer.description')}
        </p>
        <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">
            {t('footer.about')}
          </Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-foreground">
            {t('footer.terms')}
          </Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-foreground">
            {t('footer.privacy')}
          </Link>
          <span>•</span>
          <a 
            href="https://viralshortmaker.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-foreground"
          >
            Viral Short Maker
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
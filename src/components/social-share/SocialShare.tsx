import { FC } from 'react';

export const SocialShare: FC = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <div className="social-share__item">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Favesta.org%2F"
          className="social-share__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook text-light fs-3"></i>
        </a>
      </div>
      <div className="social-share__item">
        <a
          href="https://twitter.com/intent/tweet?text=Learn%20Avesta%20-%20a%20free%20online%20course%20on%20Avesta%20and%20the%20Avesta%20script%20and%20sounds%20of%20Ahura%20Mazda%20%7C%20%23Avesta%20%7C%20%23Ahura%20Mazda%20%7C%20%23AvestaScript%20%7C%20%23AvestaSounds&url=https%3A%2F%2Fwww.facebook.com%2Favesta.org%2F&hashtags=Avesta%2C%20Ahura%20Mazda%2C%20AvestaScript%2C%20AvestaSounds"
          className="social-share__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter text-light fs-3"></i>
        </a>
      </div>
    </div>
  );
};

SocialShare.displayName = 'SocialShare';

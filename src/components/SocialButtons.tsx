const SocialButtons = () => {
  const btnClass =
    "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform hover:scale-105";

  return (
    <div className="fixed bottom-[72px] right-6 md:bottom-6 z-[100] flex flex-col gap-3">
      <a
        href="https://t.me/posledniy_put"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className={btnClass}
        style={{ backgroundColor: "#2AABEE" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.944 0A11.944 11.944 0 0 0 0 11.944c0 2.644.86 5.088 2.317 7.064L1.492 23.5l4.678-1.255A11.9 11.9 0 0 0 23.888 11.944C23.888 5.346 18.542 0 11.944 0Zm6.566 8.12-2.193 10.37c-.175.785-.64.978-1.295.607l-3.59-2.643-1.733 1.667c-.191.192-.353.354-.723.354l.256-3.67 6.65-6.01c.29-.256-.063-.398-.45-.142l-8.22 5.186-3.544-1.11c-.772-.244-.79-.772.16-1.147l13.86-5.343c.64-.244 1.202.16.994 1.138Z"
            fill="white"
          />
        </svg>
      </a>
      <a
        href="https://vk.me/posledniy_put"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в VK"
        className={btnClass}
        style={{ backgroundColor: "#0077FF" }}
      >
        <span className="text-white text-sm font-bold leading-none">ВК</span>
      </a>
    </div>
  );
};

export default SocialButtons;

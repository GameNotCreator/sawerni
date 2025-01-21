const navigation = {
  main: [{ name: "Contact", href: "#" }],
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/ansub",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ansub",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M9.75 3.5a1 1 0 0 0-2 0v10a2.5 2.5 0 1 1-2.5-2.5 1 1 0 0 0 0-2 4.5 4.5 0 1 0 4.5 4.5V6.9a8.4 8.4 0 0 0 6.61 2.1 1 1 0 0 0 .89-1V7.5a8.48 8.48 0 0 1-4-1.41 8.5 8.5 0 0 1-2.89-3.66 1 1 0 0 0-.91-.6H9.75Z" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-sm text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-5 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-white">
              <span className="sr-only">{item.name}</span>
              {item.icon && (
                <item.icon className="h-5 w-5" aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} sawerni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

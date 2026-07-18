const WHATSAPP_NUMBER = "6285121952847";

const WhatsAppFloat = () => {
  const message = "Halo EleganceWood Indonesia, saya ingin bertanya seputar material pintu.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="right-4 bottom-4 w-12 h-12 sm:right-6 sm:bottom-6 sm:w-14 sm:h-14"
      style={{
        position: "fixed",
        zIndex: 60,
        borderRadius: "50%",
        background: "#2F5D50",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(47,93,80,0.35)",
        transition: "transform 250ms ease, box-shadow 250ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(47,93,80,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(47,93,80,0.35)";
      }}
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.28 1.63 6.06L3 29l8.19-2.55a12.9 12.9 0 0 0 4.83.93h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.79 22.65 3.42 16.02 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.86 1.2 1.23-3.76-.24-.39a9.9 9.9 0 0 1-1.53-5.35c0-5.48 4.46-9.93 9.93-9.93 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.48-4.46 9.9-9.03 9.9Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;

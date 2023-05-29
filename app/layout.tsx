import Modal from "@/components/Modal";
import "./globals.css";

export const metadata = {
  title: "Trello Clone",
  description:
    "Created using Next.js 13.4, Zustand, Appwrite Cloud, GPT-4 and TailWindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        {children}
        <Modal />
      </body>
    </html>
  );
}

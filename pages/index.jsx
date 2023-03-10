import MainContent from "@/components/mainContent";
import Navbar from "@/components/navbar";
import Rightbar from "@/components/rightbar";
import Sidebar from "@/components/sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>G Drive</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Sidebar />
      <Rightbar />
      <MainContent />
    </div>
  );
}

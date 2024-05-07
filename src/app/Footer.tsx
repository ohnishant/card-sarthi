import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-[#BFBFBF] h-[647px] flex flex-col gap-8 p-2 bg-gradient-to-t to-[#372093] from-[#0B0523]">
      <div className="w-full px-2 flex justify-between">
        <Image
          src="/monochrome_logo.png"
          width={200}
          height={50}
          alt="Card Sarthi"
        />
        <div className="flex gap-3 items-center">
          Follow us
          <Link href="">
            <Facebook />
          </Link>
          <Link href="">
            <Instagram />
          </Link>
          <Link href="">
            <Phone />
          </Link>
        </div>
      </div>
      <div>
        <span className="text-white font-semibold">Disclamer:</span>
        <div className="text-sm">
          The information you see here comes from trusted sources like official
          websites and news outlets. While we do our best to make sure
          everything is accurate, we can&apos;t promise it&apos;s always
          perfect. It&apos;s really important for you to carefully read all the
          terms and conditions for any products or services mentioned here or
          suggested by our advisors. If anything doesn&apos;t seem right,
          it&apos;s best to double-check. We&apos;re not responsible for any
          problems or losses that might happen if you rely only on what you see
          here.
        </div>
      </div>
      <hr />
      <div>
        <div className="flex flex-col gap-4 w-[334px]">
          <div>
            <span className="text-white font-semibold">Address:</span>
            <div className="text-sm">
              House No. 20, 17a, Sector 17C, Block C, Sukhrali, Sector 17,
              Gurugram, Haryana 122001
            </div>
          </div>
          <div>
            <span className="text-white font-semibold">Phone :</span>
            <span className="text-sm">+91 93198 78777</span>
          </div>
          <div>
            <span className="text-white font-semibold">E-mail : </span>
            <span className="text-sm">info@cardsarthi.in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="text-[#BFBFBF] flex flex-col gap-8 px-8 p-2 bg-gradient-to-t to-[#372093] from-[#0B0523]">
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
            The information you see here comes from trusted sources like
            official websites and news outlets. While we do our best to make
            sure everything is accurate, we can&apos;t promise it&apos;s always
            perfect. It&apos;s really important for you to carefully read all
            the terms and conditions for any products or services mentioned here
            or suggested by our advisors. If anything doesn&apos;t seem right,
            it&apos;s best to double-check. We&apos;re not responsible for any
            problems or losses that might happen if you rely only on what you
            see here.
          </div>
        </div>
        <hr />
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="max-w-[334px]">
            <span className="text-white font-semibold">Address:</span>
            <div className="text-sm">
              House No. 20, 17a, Sector 17C, Block C, Sukhrali, Sector 17,
              Gurugram, Haryana 122001
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

          <div>
            <span className="text-white font-semibold">Products:</span>
            <ul className="text-sm list-inside space-y-2 list-disc">
              <li>Credit Cards</li>
              <li>Cashback Cards</li>
              <li>Reward Cards</li>
              <li>No annual fees Cards</li>
              <li>Travel Cards</li>
              <li>Shopping Cards</li>
            </ul>
          </div>
          <div>
            <span className="text-white font-semibold">Company:</span>
            <ul className="text-sm space-y-2 list-inside list-disc">
              <li>About Card Sarthi</li>
              <li>Contact Us</li>
              <li>Privacy & Policy</li>
              <li>Terms of Use</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <span className="text-white font-semibold">Resources:</span>
            <ul className="text-sm list-inside space-y-2 list-disc">
              <li>Check Eligibility</li>
              <li>Blogs</li>
              <li>Videos</li>
              <li>Credit Card News</li>
            </ul>
          </div>
          <div>
            <span className="text-white font-semibold">Tools:</span>
            <ul className="text-sm list-inside space-y-2 list-disc">
              <li>EMI Calculator</li>
              <li>Credit Scores</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-row gap-36 text-white justify-between">
          <div>Copyright © 2024 Card Sarthi Inc. All rights reserved</div>
          <div>
            Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

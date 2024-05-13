import { Card } from "@/actions/getCardsByBankAndType";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";
import Image from "next/image";
import { Star } from "lucide-react";

const CardCard = ({ details }: { details: Card }) => {
  return (
    <div className="flex flex-col lg:flex-row p-4 justify-between rounded-md w-full min-h-96 bg-[#FCF4E3]">
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-row gap-4">
          <ImageWithFallback
            src={`/cardImages/${details.key}.jpg`}
            fallbackSrc="/cardImages/placeholder.png"
            width={313}
            height={180}
            alt={details.name}
            className="rounded-md"
          />
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">{details.name}</div>
            <div className="font-semibold">{details.tags.join(", ")}</div>
            <div>
              <div className="flex items-center">
                <Image
                  src={"/favicon.png"}
                  width={20}
                  alt="Card Sarthi"
                  height={29}
                />
                {[...Array(5)].map((_, i) =>
                  details.stars > i ? (
                    <Star key={i} strokeWidth={0} size={24} fill="#EEB541" />
                  ) : (
                    <Star key={i} strokeWidth={1} size={20} fill="none" />
                  ),
                )}
                <div className="px-3 font-semibold">{details.stars}/5</div>
              </div>
              <div className="my-2">
                Annual Fee:{" "}
                <span className="font-semibold">{details.annual_fee}</span>
              </div>
              <div className="my-2">
                Joining Fee:{" "}
                <span className="font-semibold">{details.joining_fee}</span>
              </div>
              <div className="my-2">
                Credit Score:{" "}
                <span className="font-semibold">{details.credit_score}</span>
                <span className="font-extralight">(min req)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 grid-cols-2">
          <div>
            <strong className="font-semibold text-lg">Features</strong>
            <ul className="list-disc list-outside pl-3">
              {details.features.map((feature, id) => (
                <li key={id}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong className="font-semibold text-lg">Welcome Offer</strong>
            <ul className="list-disc list-outside pl-3">
              {details.welcome_offer.map((offer, id) => (
                <li key={id}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[201px] py-12 gap-6 flex flex-col text-xl">
        <Button className="w-full text-lg">Apply Now</Button>
        <Button
          variant="secondary"
          className="w-full outline outline-1 bg-transparent text-lg"
        >
          Check Eligibility
        </Button>
      </div>
    </div>
  );
};

export default CardCard;

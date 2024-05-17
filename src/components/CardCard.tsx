"use cient";
import { CardType } from "@/actions/getCardsByBankAndType";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";
import Image from "next/image";
import { Star } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ApplyDialog from "./ApplyDialog";
import { useState } from "react";

const CardCard = ({ details }: { details: CardType }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <DesktopCard details={details} />
  ) : (
    <MobileCard details={details} />
  );
};

const MobileCard = ({ details }: { details: CardType }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  function closeDialog(val: boolean) {
    setDialogOpen(val);
  }

  return (
    <div className="flex flex-col p-4 gap-4 justify-between rounded-md w-full min-h-56 bg-[#FCF4E3]">
      <div className="min-h-36 bg-green-30">
        <div className="flex gap-2">
          <ImageWithFallback
            src={`/cardImages/${details.key}.jpg`}
            fallbackSrc="/cardImages/placeholder.png"
            width={100}
            height={60}
            alt={details.name}
            className="rounded-md max-h-[100px]"
          />
          <div>
            <div className="text-l font-semibold">{details.name}</div>
            <div className="text-sm">{details.tags.join(", ")}</div>
            <div>
              <div className="flex">
                <Image
                  src="/favicon.png"
                  width={20}
                  alt="Card Sarthi"
                  height={29}
                />
                {[...Array(5)].map((_, i) =>
                  details.stars > i ? (
                    <Star
                      key={i}
                      strokeWidth={1}
                      size={14}
                      fill="#EEB541"
                      stroke="#EEB541"
                    />
                  ) : (
                    <Star key={i} strokeWidth={1} size={14} fill="none" />
                  ),
                )}
                <span className="text-xs font-semibold">{details.stars}/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
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
          <div className="max-w-[121px] flex flex-col gap-2">
            <ApplyDialog
              open={dialogOpen}
              setOpenState={closeDialog}
              details={details}
            >
              <Button className="w-full outline outline-1 h-[25px] outline-none">
                Apply Now
              </Button>
            </ApplyDialog>
            <Button
              variant="secondary"
              className="w-full outline outline-1 h-[25px] bg-transparent"
            >
              Check Eligibility
            </Button>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="features">
          <AccordionTrigger className="bg-[#FFE0A0] rounded-t flex justify-center items-center">
            Features
          </AccordionTrigger>
          <AccordionContent className="bg-[#FFE0A0] rounded-b">
            <ul className="list-disc list-outside pl-10">
              {details.features.map((feature, id) => (
                <li key={id}>{feature}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="welcome_offers">
          <AccordionTrigger className="bg-[#FFE0A0] rounded-t mt-2 flex items-center justify-center">
            Welcome Offers
          </AccordionTrigger>
          <AccordionContent className="bg-[#FFE0A0] rounded-b">
            <ul className="list-disc list-outside p-10">
              {details.welcome_offer.map((offer, id) => (
                <li key={id}>{offer}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="benefits">
          <AccordionTrigger className="bg-[#FFE0A0] rounded-t mt-2 flex items-center justify-center">
          Benefits
          </AccordionTrigger>
          <AccordionContent className="bg-[#FFE0A0] rounded-b">
            <ul className="list-disc list-outside p-10">
              {details.benefits.map((offer, id) => (
                <li key={id}>{offer}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
const DesktopCard = ({ details }: { details: CardType }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  function closeDialog(val: boolean) {
    setDialogOpen(val);
  }
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
            {details.welcome_offer.length ? (
              <>
                <strong className="font-semibold text-lg">Welcome Offer</strong>
                <ul className="list-disc list-outside pl-3">
                  {details.welcome_offer.map((offer, id) => (
                    <li key={id}>{offer}</li>
                  ))}
                </ul>
              </>
            ) : (
              <> </>
            )}
          </div>
          <div>
            {details.benefits.length ? (
              <>
                <strong className="font-semibold text-lg">Benefits</strong>
                <ul className="list-disc list-outside pl-3">
                  {details.benefits.map((offer, id) => (
                    <li key={id}>{offer}</li>
                  ))}
                </ul>
              </>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
      <div className="w-[201px] py-12 gap-6 flex flex-col text-xl">
        <ApplyDialog
          open={dialogOpen}
          setOpenState={closeDialog}
          details={details}
        >
          <Button className="w-full text-lg">Apply Now</Button>
        </ApplyDialog>
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

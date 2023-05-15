import { BsArrowDown, BsDiscord } from 'react-icons/bs';

import Button from '@/core/components/Button';
import BnchPMC from '@/assets/boniche-pmc.png';

import '@/styles/homepage.css';
import { Card } from '@tremor/react';

export default async function IndexPage() {
  return (
    <>
      <div className="flex flex-row flex-1 flex-wrap mb-32">
        <div className="flex flex-col w-1/2 justify-end">
          <h1 className="text-4xl font-bold mb-2">Welcome to Boniche Gang !</h1>
          <p className="italic">
            French-speaking retardeds and incompetent community
          </p>
          <div className="flex flex-row mt-4 gap-4">
            <Button style="primary" href="/register">
              Join us
            </Button>
            <Button style="secondary" href="https://discord.gg/FZ72bEd4bp">
              <BsDiscord className="mr-2" /> Discord
            </Button>
          </div>
          <span className="flex flex-row items-center mt-8">
            <BsArrowDown className="scroll-down mr-2" /> Scroll down
          </span>
        </div>
        <div className="flex flex-col w-1/2 relative">
          <img
            src={BnchPMC.src}
            className="splash rounded-lg shadow-lg m-auto"
          />
        </div>
      </div>
      <div className="flex flex-row flex-1 flex-wrap w-4/5 m-auto">
        <Card>
          <h2 className="text-4xl font-bold mb-2 text-center">About us</h2>
          <p>
            We are a dynamic and passionate community of gamers, and we are
            thrilled to welcome you to our website. Our community is open to all
            French-speaking players, regardless of their skill levels or game
            preferences. We cover a variety of games, from first-person shooters
            to real-time strategy games, survival games but mostly milsim games.
            <br />
            <br />
            Boniche gang is a name that take in the whole community, but we also
            created some variations for different context like Task Force Boniche
            for milsim games, Boniches Racing for F1 games, Boniche Guild for 
            medieval games and Boniche Corp. for business shits. You are free to
            join all of them or just one, it's up to you.
            <br />
            <br />
            If we had to describe ourselves in a few words, we would say that we
            are a community of friends who like to play together and have fun and mostly
            divide our IQ by 2 (or more) when we play together.
            <br />
            <br />
            We are proud to be a community that is open to everyone, regardless of
            their religion or mental illness. For example we have a Ferrari fan in
            our community, and we don't judge him for that.
            So if you are a weirdos and you want to join us, don't hesitate to
            join our Discord server. You will look like a normal person compared
            to us.
          </p>
        </Card>
      </div>
    </>
  );
}

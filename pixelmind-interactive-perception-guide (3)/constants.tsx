import React from 'react';
import type { SectionData } from './types';
import InteractiveIllusion from './components/InteractiveIllusion';
import ActionPlanCard from './components/ActionPlanCard';
import ConceptSlideshow from './components/ConceptSlideshow';

export const DOCUMENT_SECTIONS: SectionData[] = [
  {
    id: 'intro',
    page: 1,
    title: 'The Grand Illusion',
    subtitle: 'Why Your App Looks (and Sounds) Different to Everyone',
    content: [
      <div key="meta" className="text-sm text-gray-500 border-l-2 border-blue-500 pl-4 space-y-1 mb-8">
        <p><strong>To:</strong> The PixelMind Design & Development Teams</p>
        <p><strong>From:</strong> A Friend in Cognitive Science</p>
        <p><strong>Date:</strong> August 4, 2025</p>
        <p><strong>Subject:</strong> It's Not a Bug, It's a Brain Feature</p>
      </div>,
      <p key="p1">Hello PixelMind Team,</p>,
      <p key="p2">Jamie reached out about a fascinating challenge: users are having wildly different experiences with our new meditation app. This isn't a technical glitch. It's the human brain at work.</p>,
      <p key="p3">We all share a fundamental misunderstanding about how we experience the world, a concept known as the <strong className="text-blue-600 font-semibold">Fundamental Cognitive Error</strong>: we believe we see reality as it truly is. But we don't. We are not passively recording the world; our brain actively <em className="italic">constructs</em> our reality every moment.</p>,
      <p key="p4">Think of the brain as a powerful graphics rendering engine. It takes in raw, messy data from the senses and instantly interprets it based on memories, expectations, and built-in rules. This guide will walk through key psychological concepts that explain why our 'one app' is being perceived as 'many apps.'</p>
    ]
  },
  {
    id: 'architects',
    page: 2,
    title: 'The Architects of Reality',
    subtitle: 'Expectation & Context',
    content: [
        <p key="p1">Two of the most powerful forces that shape our constructed reality are <em className="italic">expectation</em> and <em className="italic">context</em>. What we perceive is heavily influenced by what our brain expects to perceive based on past experiences and the surrounding environment.</p>,
        <div key="c1" className="mt-10">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Concept 1: Top-Down Processing</h3>
            <p className="mb-4">Our brain uses high-level knowledge to interpret sensory information. This interactive example shows how we find meaningful patterns in random noise, a form of <strong className="font-semibold text-gray-700">pareidolia</strong>.</p>
            <ConceptSlideshow slides={[
                {
                    element: <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop')" }}></div>,
                    caption: "Just a photo of some clouds. Or is it? Our brains are wired to look for familiar patterns.",
                },
                {
                    element: (
                        <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop')" }}>
                            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-80">
                                <circle cx="70" cy="80" r="10" stroke="#FFD700" strokeWidth="3" fill="none" />
                                <circle cx="130" cy="80" r="10" stroke="#FFD700" strokeWidth="3" fill="none" />
                                <path d="M 70 120 Q 100 140 130 120" stroke="#FFD700" strokeWidth="3" fill="none" />
                            </svg>
                        </div>
                    ),
                    caption: "With a little suggestion, a face appears! Our app's ambiguous elements can act like these clouds.",
                }
            ]} />
        </div>,
        <div key="c2" className="mt-10">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Concept 2: The Power of Context</h3>
            <p className="mb-4">The surrounding environment dramatically changes how we interpret things. The infamous '#TheDress' illusion was caused by this. See how context changes your perception of color below.</p>
            <ConceptSlideshow slides={[
                {
                    element: (
                        <div className="w-full h-full flex items-center justify-center bg-indigo-900">
                            <div className="w-24 h-24 rounded-full bg-gray-500 shadow-lg"></div>
                        </div>
                    ),
                    caption: "Look at the grey circle. On a dark background, your brain might perceive it as being lighter.",
                },
                {
                    element: (
                        <div className="w-full h-full flex items-center justify-center bg-amber-200">
                            <div className="w-24 h-24 rounded-full bg-gray-500 shadow-lg"></div>
                        </div>
                    ),
                    caption: "It's the exact same grey circle. On a light background, it appears darker. Context is everything!",
                }
            ]} />
        </div>
    ]
  },
  {
    id: 'illusion',
    page: 3,
    title: 'Try It Yourself',
    subtitle: 'An Illusion of Reality',
    content: [
      <p key="p1">To feel how powerfully your brain's built-in rules shape perception, try this classic illusion.</p>,
      <h3 key="h3" className="text-xl font-semibold text-blue-600 mt-8 mb-2">The Shape-from-Shading Illusion</h3>,
      <p key="p2">Look at the image below. Do you see a field of bumps or a landscape of craters? Now, press the button to flip the image upside down and look at it again. The features should instantly flip.</p>,
      <InteractiveIllusion key="interactive" />,
      <h4 key="h4" className="text-lg font-semibold text-gray-800 mt-6 mb-2">What's happening?</h4>,
      <p key="p3">Your visual system has a fundamental, hardwired assumption: <strong className="text-blue-600 font-semibold">light comes from above</strong>. When it sees a shape with shading at the bottom, it assumes it's a bump. When shading is at the top, it assumes it's a crater. You cannot consciously override this; your perception is locked to this rule.</p>
    ]
  },
  {
    id: 'action-plan',
    page: 4,
    title: 'Designing for Perception',
    subtitle: 'Our Action Plan',
    content: [
      <p key="p1">We can't create one experience that everyone perceives identically, but we can design for these differences. Here are four practical insights for our design process:</p>,
      <div key="cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ActionPlanCard
          number="1"
          title="Reduce Perceptual Ambiguity"
          description="Where we see disagreement is where our design is most ambiguous. For the 'blue vs. purple' icon, we must choose a color that is clearly one or the other and test it against various backgrounds."
        />
        <ActionPlanCard
          number="2"
          title="Clarify, Don't Just Simplify"
          description="Our 'simple' meditation bell is so simple it's acting like an auditory inkblot test. A more complex, layered sound is less ambiguous and gives the brain more data, reducing the chance of pareidolia."
        />
        <ActionPlanCard
          number="3"
          title="Context is King: Embrace It"
          description="The 'harsh vs. gloomy' feedback is a direct result of different lighting. Implementing robust Light/Dark modes is a fundamental tool that lets users match the app's context to their environment."
        />
        <ActionPlanCard
          number="4"
          title="Guide the Eye (and the Brain)"
          description="By using strong visual hierarchy, shadows, and clear contrast, we can tell the user's brain what is important. This reduces cognitive load and makes the interface more intuitive."
        />
      </div>
    ]
  }
];
import React from 'react';
import Presentation from './components/Presentation';
import { SlideContent } from './types';
import { 
  ShieldCheckIcon, MalwareIcon, PhishingIcon, InsiderThreatIcon, APTIcon, BrainIcon, 
  CheckCircleIcon, XCircleIcon, LayersIcon, SearchIcon, SIEMIcon, 
  EndpointIcon, IntelligenceLifecycleIcon, HashIcon, RegistryIcon,
  PyramidIcon, FeedIcon,
  ChevronRightIcon, NistIcon, PlaybookIcon, RunbookIcon, CommunicationIcon, GavelIcon, TableTopIcon,
  SOARIcon, IDSIcon, ForensicsIcon, ToolsIcon, CaseStudyIcon, MitreIcon, RedTeamIcon, BlueTeamIcon, PurpleTeamIcon,
  UsersIcon, ClockIcon, EyeIcon, ClipboardDocumentCheckIcon, ArchiveBoxIcon, LightBulbIcon, TrendingUpIcon, ScaleIcon
} from './components/icons';

const slides: SlideContent[] = [
  // SLIDE 1: Title
  {
    title: 'Threat Detection & Incident Response',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-3xl text-gray-400 mb-8">HINF5502 - Week 8</p>
        <EyeIcon className="w-32 h-32 text-cyan-400 mb-6" />
        <p className="mt-8 text-2xl text-gray-300">Understanding the tools, tactics, and mindset required to protect our digital world.</p>
      </div>
    ),
  },
  // SLIDE 2: Agenda
  {
    title: 'Presentation Agenda',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '100ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>The "Why":</strong> The Threat Landscape & The Modern Mindset</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '200ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>The "How":</strong> Core Detection Methods & The Accuracy Challenge</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '300ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Proactive Defense:</strong> Threat Hunting & Layered Security</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '400ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><span className="font-bold text-cyan-400">Deep Dive:</span> Threat Intelligence & IOCs</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '500ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><span className="font-bold text-cyan-400">Deep Dive:</span> Incident Response & Planning</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '600ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><span className="font-bold text-cyan-400">Deep Dive:</span> The Security Toolkit in Action</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '700ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><span className="font-bold text-cyan-400">Deep Dive:</span> Real-World Case Studies & Simulations</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '800ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><span className="font-bold text-cyan-400">Deep Dive:</span> Building a Resilient Response Program</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '900ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Conclusion:</strong> Key Takeaways & Discussion</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 3: Role of Threat Detection
  {
    title: 'Why Threat Detection Matters: A Shift in Mindset',
    content: (
      <div className="space-y-6">
        <p>In the early days of cybersecurity, the strategy was simple: build a digital fortress. High walls, a strong gate, and a deep moat were all that mattered. But attackers have evolved, and so must our thinking.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-red-900/30 rounded-lg border border-red-500">
                <h3 className="font-bold text-2xl text-red-400 mb-2">Old Thinking: "The Castle & Moat"</h3>
                <p>This strategy focuses all security on the perimeter. It assumes that if no one breaks down the front gate, the kingdom is safe. This approach is brittle and fails the moment a single attacker gets inside, whether through a secret tunnel (a zero-day exploit) or by tricking a guard (phishing).</p>
            </div>
            <div className="p-6 bg-green-900/30 rounded-lg border border-green-500">
                <h3 className="font-bold text-2xl text-green-400 mb-2">Modern Thinking: "Assume Breach"</h3>
                <p>This strategy accepts the reality that determined attackers <span className="font-bold">will</span> get in. The new goal is to find them as quickly as possible, before they can steal the crown jewels. We need guards patrolling the castle grounds, not just standing at the gate. This is the core of threat detection.</p>
            </div>
        </div>
        <p className="text-xl pt-4">Threat detection's primary goal is to drastically reduce <span className="text-cyan-400 font-semibold">"Dwell Time"</span>—the critical window an attacker has between their initial compromise and when they are finally discovered.</p>
      </div>
    ),
  },
  // SLIDE 4: The Threat Landscape
  {
    title: 'Who Are We Looking For? Common Threats',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg animate-slide-in-up" style={{ animationDelay: '100ms' }}>
          <MalwareIcon className="w-16 h-16 text-red-400 mb-3" />
          <h3 className="text-2xl font-bold mb-2">Malware</h3>
          <p className="text-center text-gray-300">Short for "malicious software." This is the digital equivalent of a burglar's toolkit. It includes everything from ransomware that holds your data hostage, to viruses that corrupt files, and spyware that steals your information silently.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg animate-slide-in-up" style={{ animationDelay: '200ms' }}>
          <PhishingIcon className="w-16 h-16 text-yellow-400 mb-3" />
          <h3 className="text-2xl font-bold mb-2">Social Engineering</h3>
          <p className="text-center text-gray-300">The art of the con. Instead of breaking down the door, attackers trick you into opening it for them. Phishing emails are the most common tactic, pretending to be a trusted source (like your bank or IT department) to steal your password.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg animate-slide-in-up" style={{ animationDelay: '300ms' }}>
          <InsiderThreatIcon className="w-16 h-16 text-purple-400 mb-3" />
          <h3 className="text-2xl font-bold mb-2">Insider Threats</h3>
          <p className="text-center text-gray-300">The threat from within. This could be a disgruntled employee intentionally stealing data, or a well-meaning but careless employee who accidentally clicks a malicious link and lets an attacker in. Both are equally dangerous.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg animate-slide-in-up" style={{ animationDelay: '400ms' }}>
          <APTIcon className="w-16 h-16 text-cyan-400 mb-3" />
          <h3 className="text-2xl font-bold mb-2">Advanced Persistent Threats (APTs)</h3>
          <p className="text-center text-gray-300">The spies of the digital world. These are highly sophisticated, well-funded groups, often state-sponsored, who conduct long-term campaigns to steal national secrets, intellectual property, or disrupt critical infrastructure.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 5: Signature-Based
  {
    title: 'How We Find Them, Method 1: Signature-Based Detection',
    content: (
      <div className="flex flex-col items-center text-center">
        <p className="text-4xl mb-4">Analogy: "The Wanted Poster"</p>
        <p className="text-xl mb-6">This is the most straightforward detection method. It works by looking for known, specific indicators of malicious activity, called "signatures." Think of it as a digital bouncer with a binder full of "wanted posters" for known viruses. Every file or piece of data is checked against this binder.</p>
        <div className="w-full grid grid-cols-2 gap-6 text-lg mt-4">
          <div className="bg-green-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-green-400 mb-2">PROS:</p><ul className="list-disc list-inside text-left"><li>Extremely fast and efficient.</li><li>Highly accurate with very few "false alarms" (false positives).</li><li>Excellent for stopping the vast majority of common, known threats.</li></ul></div>
          <div className="bg-red-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-red-400 mb-2">CONS:</p><ul className="list-disc list-inside text-left"><li>Completely ineffective against brand-new, never-before-seen attacks ("zero-day" threats).</li><li>A signature must be created *after* a threat is discovered, so it's always one step behind.</li></ul></div>
        </div>
      </div>
    )
  },
  // SLIDE 6: Anomaly-Based
  {
    title: 'How We Find Them, Method 2: Anomaly-Based Detection',
    content: (
      <div className="flex flex-col items-center text-center">
        <p className="text-4xl mb-4">Analogy: "Spotting Strange Behavior"</p>
        <p className="text-xl mb-6">This method doesn't look for known threats. Instead, it spends time learning what's "normal" for your network. This learned normal is called a <span className="font-bold text-cyan-400">baseline</span>. After the baseline is established, the system flags any activity that significantly deviates from it.</p>
        <p className="text-lg">Example: It's normal for your accounting team to log in from 9 AM to 5 PM from the office. It's an <span className="text-yellow-400">anomaly</span> when an accounting login occurs at 3 AM from an unrecognized country. This method flags that anomaly for investigation.</p>
        <div className="w-full grid grid-cols-2 gap-6 text-lg mt-4">
          <div className="bg-green-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-green-400 mb-2">PROS:</p><ul className="list-disc list-inside text-left"><li>Can detect new, unknown "zero-day" attacks.</li><li>Uses machine learning to adapt to your specific environment.</li></ul></div>
          <div className="bg-red-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-red-400 mb-2">CONS:</p><ul className="list-disc list-inside text-left"><li>Can generate a high number of false positives (false alarms).</li><li>If an attacker is already "inside" during the learning phase, their activity might be baselined as "normal."</li></ul></div>
        </div>
      </div>
    )
  },
  // SLIDE 7: Behavioral-Based
  {
    title: 'How We Find Them, Method 3: Behavioral Detection',
    content: (
      <div className="flex flex-col items-center text-center">
        <p className="text-4xl mb-4">Analogy: "Judging by Actions, Not Looks"</p>
        <p className="text-xl mb-6">This advanced method, often called Heuristic Analysis, focuses on the <span className="font-bold text-cyan-400">intent</span> behind a sequence of actions. It doesn't care what a file *is* (its signature), but what it *does*. It looks for behaviors that are inherently suspicious or malicious.</p>
        <p className="text-lg">Example: A trusted program like Microsoft Word should never start encrypting thousands of personal files and then try to delete the originals. That specific <span className="text-yellow-400">sequence of actions</span> is a classic ransomware behavior, and this method is designed to spot it, even if the ransomware is brand new.</p>
        <div className="w-full grid grid-cols-2 gap-6 text-lg mt-4">
          <div className="bg-green-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-green-400 mb-2">PROS:</p><ul className="list-disc list-inside text-left"><li>Highly effective against modern malware that tries to hide its identity.</li><li>Focuses on malicious intent, not just unusual activity.</li></ul></div>
          <div className="bg-red-900/40 p-6 rounded-lg"><p className="font-bold text-xl text-red-400 mb-2">CONS:</p><ul className="list-disc list-inside text-left"><li>Requires a deep understanding of how systems and applications are supposed to behave.</li><li>Can be computationally intensive and more complex to configure.</li></ul></div>
        </div>
      </div>
    )
  },
  // SLIDE 8: Accuracy Challenge
  {
    title: 'The Accuracy Challenge: A Balancing Act',
    content: (
        <div className="space-y-4">
            <p>No detection system is perfect. The goal is to maximize correct detections while minimizing incorrect ones. Think of a smoke detector in your kitchen:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="p-4 bg-green-900/40 rounded-lg border border-green-500">
                    <h3 className="text-2xl font-bold text-green-400 mb-2 flex items-center"><CheckCircleIcon className="w-8 h-8 mr-2"/>True Positive</h3>
                    <p>The alarm goes off, and there's a real fire. This is a successful detection that saves your house. We want as many of these as possible.</p>
                </div>
                <div className="p-4 bg-yellow-900/40 rounded-lg border border-yellow-500">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2 flex items-center"><XCircleIcon className="w-8 h-8 mr-2"/>False Positive</h3>
                    <p>The alarm goes off because you burnt toast. This is an annoying "false alarm." Too many of these cause "alert fatigue," where people start ignoring the alarm.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <h3 className="text-2xl font-bold text-gray-300 mb-2 flex items-center"><CheckCircleIcon className="w-8 h-8 mr-2"/>True Negative</h3>
                    <p>You're cooking normally, and the alarm stays silent. This is the desired, normal state where the system is working correctly without bothering you.</p>
                </div>
                <div className="p-4 bg-red-900/40 rounded-lg border border-red-500">
                    <h3 className="text-2xl font-bold text-red-400 mb-2 flex items-center"><XCircleIcon className="w-8 h-8 mr-2"/>False Negative</h3>
                    <p>There's a real fire, but the alarm is silent because the batteries are dead. This is a catastrophic failure where a real threat is missed. We must avoid this at all costs.</p>
                </div>
            </div>
        </div>
    ),
  },
  // SLIDE 9: Tools of the Trade
  {
    title: 'The Cybersecurity Toolkit: A Team Effort',
    content: (
        <div className="space-y-6">
            <p>To implement our detection methods, we use a set of specialized tools that work together. No single tool can do it all; they each have a specific job.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                    <SIEMIcon className="w-16 h-16 text-cyan-400 mx-auto mb-3"/>
                    <h3 className="text-2xl font-semibold text-cyan-400">SIEM: The Control Room</h3>
                    <p className="mt-2 text-gray-300">Collects and correlates logs from ALL other tools into one single dashboard. It's the central nervous system that sees the big picture.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                    <ShieldCheckIcon className="w-16 h-16 text-cyan-400 mx-auto mb-3"/>
                    <h3 className="text-2xl font-semibold text-cyan-400">IDS/IPS: The Border Patrol</h3>
                    <p className="mt-2 text-gray-300">Sits at the edge of the network, inspecting traffic for known threats and blocking them before they can get inside. It's the first line of defense.</p>
                </div>
                 <div className="p-4 bg-gray-800/50 rounded-lg">
                    <EndpointIcon className="w-16 h-16 text-cyan-400 mx-auto mb-3"/>
                    <h3 className="text-2xl font-semibold text-cyan-400">EDR: The On-Site Detective</h3>
                    <p className="mt-2 text-gray-300">Lives on individual computers (endpoints) and provides deep visibility into everything happening on that specific device, looking for suspicious behavior.</p>
                </div>
            </div>
        </div>
    ),
  },
  // SLIDE 10: Deep Dive SIEM
  {
    title: 'Deep Dive: How a SIEM Tells a Story',
    content: (
      <div className="space-y-4">
        <p>A SIEM (<span className="text-cyan-400">Security Information and Event Management</span>) is a powerful "storytelling" machine. By itself, a single log message is meaningless. The SIEM's job is to collect millions of these messages from hundreds of different tools and connect them to tell the story of an attack.</p>
        <p>Imagine a security guard seeing three separate, unrelated events in their logbook:</p>
        <div className="p-6 bg-gray-800/50 rounded-lg mt-4 space-y-2 text-lg">
            <p><span className="font-bold text-gray-400">10:01 AM:</span> An employee's password fails on the accounting server.</p>
            <p><span className="font-bold text-gray-400">10:02 AM:</span> That same employee's password fails 100 more times in one minute.</p>
            <p><span className="font-bold text-green-400">10:03 AM:</span> That same employee successfully logs in from a country where the company has no office.</p>
        </div>
        <p className="pt-4">The SIEM is the brain that automatically connects these dots and raises a single, high-priority alert: <span className="text-red-500 font-bold">"This account is likely compromised!"</span> This process of connecting events is called <span className="font-bold text-cyan-400">correlation</span>.</p>
      </div>
    )
  },
   // SLIDE 11: Deep Dive EDR
  {
    title: 'Deep Dive: The Power of EDR',
    content: (
      <div className="space-y-4">
        <p>An EDR (<span className="text-cyan-400">Endpoint Detection and Response</span>) tool is like having a security camera pointed directly at the inner workings of a computer (an "endpoint"). It provides the deep visibility needed for behavioral and anomaly-based detection.</p>
         <p>An EDR doesn't just ask "Is this file a virus?". It asks, <span className="text-yellow-400 font-bold">"What is this file *doing*?"</span> and provides answers by monitoring:</p>
         <ul className="list-disc list-inside ml-4 space-y-3">
            <li><span className="font-semibold">Process Creation:</span> Your calculator app is a trusted program, but it should never try to access the internet. An EDR sees this suspicious behavior and flags it.</li>
            <li><span className="font-semibold">Network Connections:</span> An EDR logs every single website and server that every program on the computer talks to, helping to spot communication with known malicious servers.</li>
            <li><span className="font-semibold">File and Registry Changes:</span> Is a program trying to embed itself deep in the system's core settings (the Registry) to ensure it runs every time the computer starts? An EDR tracks these changes.</li>
        </ul>
        <p><span className="text-cyan-400 font-bold">XDR (Extended Detection and Response)</span> is the next evolution, combining EDR data with alerts from network, email, and cloud tools for an even bigger, more correlated picture of an attack.</p>
      </div>
    )
  },
  // SLIDE 12: The Human Element
  {
    title: 'The Human Element: The SOC Analyst',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 h-full">
        <div className="md:w-1/3 flex justify-center">
            <SearchIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
            <p>With all this automation, why do we still need people? Because attackers are creative, adaptable humans, and it often takes a human to understand their motives and anticipate their next move.</p>
            <p>A <span className="font-bold">Security Operations Center (SOC) Analyst</span> is the detective who uses these powerful tools to:</p>
            <ul className="list-disc list-inside ml-4 space-y-3">
                <li><span className="font-semibold">Investigate Alerts:</span> Is this alarm just "burnt toast" (a false positive) or a real fire? They use their expertise and intuition to triage and prioritize real threats.</li>
                <li><span className="font-semibold">Connect the Dots:</span> They follow the breadcrumbs of an attack across multiple systems to understand the full story of what happened, from initial entry to final impact.</li>
                <li><span className="font-semibold">Hunt for Hidden Threats:</span> They proactively search for subtle clues and patterns that the automated tools might have missed.</li>
            </ul>
        </div>
      </div>
    )
  },
  // SLIDE 13: Threat Hunting
  {
    title: 'Proactive Defense: What is Threat Hunting?',
    content: (
      <div className="space-y-4">
        <p>Threat Hunting flips the security model from defensive to offensive. Instead of waiting for an alarm to go off, the hunter begins with the "Assume Breach" mindset and proactively searches for attackers who may already be hiding in the network.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-gray-800/40 rounded-lg">
                <h3 className="font-bold text-2xl mb-2">Reactive Security (Waiting for the Alarm)</h3>
                <p>"The SIEM sent an alert that a known bad file was found. Let's start our investigation."</p>
            </div>
            <div className="p-6 bg-cyan-900/40 rounded-lg border border-cyan-500">
                <h3 className="font-bold text-2xl text-cyan-400 mb-2">Proactive Hunting (Looking for Trouble)</h3>
                <p>"I have a hypothesis that an attacker is hiding by using a legitimate tool like PowerShell for malicious purposes. I will now search all our EDR logs for unusual PowerShell activity."</p>
            </div>
        </div>
        <p className="pt-4 text-xl">Threat hunting is an intelligence-driven, human-led process. It's about asking the right questions and knowing where to look for the answers, turning the defender into the predator.</p>
      </div>
    )
  },
  // SLIDE 14: Why IR Matters - REWRITTEN FOR FLOW
  {
    title: 'From Detection to Action: The Need for a Plan',
    content: (
       <div className="space-y-6">
        <p>Knowing your house is on fire is the first critical step. But what do you do next? Who do you call? Where are the exits? This is where Incident Response comes in.</p>
         <p className="p-6 bg-gray-800/50 rounded-lg text-center text-2xl">An <span className="font-bold text-cyan-400">Incident Response (IR) Plan</span> is the pre-defined, step-by-step "fire drill" for a cyberattack.</p>
        <p>Without a plan, teams waste critical time asking "What do we do now?". A good plan ensures everyone knows their role and helps you:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li><span className="font-semibold">Minimize Damage:</span> Quickly contain the threat to stop it from spreading (e.g., isolating a ransomware infection before it encrypts the whole network).</li>
            <li><span className="font-semibold">Recover Faster:</span> Get back to business with a clear, practiced, step-by-step process.</li>
            <li><span className="font-semibold">Learn and Improve:</span> Forensically analyze how the attacker got in so you can close that door for good and improve your defenses.</li>
        </ul>
      </div>
    )
  },
  // SLIDE 15: OLD Incident Response Lifecycle
  {
    title: 'The Incident Response Lifecycle',
    content: (
      <div className="space-y-4">
        <p>A structured response moves you from chaos to control. The six steps are a continuous loop designed to not just fix the current problem, but prevent future ones.</p>
        <div className="relative p-4 mt-4">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700"></div>
            <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">1. Preparation</h3><p className="text-base text-gray-400">The work you do before anything happens: training your team, preparing your tools, and writing your plan.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">2. Identification</h3><p className="text-base text-gray-400">The "Aha!" moment. Your tools and analysts confirm that a real security incident is happening, not a false alarm.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">3. Containment</h3><p className="text-base text-gray-400">Stop the bleeding! This could mean disconnecting infected machines from the network or locking a compromised user account.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">4. Eradication & 5. Recovery</h3><p className="text-base text-gray-400">Completely remove the attacker from your network and safely restore systems from clean backups.</p>
            </div>
             <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">6. Lessons Learned</h3><p className="text-base text-gray-400">The most important step: analyze the root cause of the incident and improve your defenses so it never happens again.</p>
            </div>
        </div>
      </div>
    ),
  },
  // SLIDE 16: Defense-in-Depth
  {
    title: 'Putting It All Together: Defense-in-Depth',
    content: (
        <div className="flex flex-col items-center justify-center h-full">
            <ShieldCheckIcon className="w-28 h-28 text-cyan-400 mb-6" />
            <p className="text-center mb-6 text-2xl">No single security tool or process is a silver bullet. A strong defense uses multiple, overlapping layers to protect your most valuable assets (your data).</p>
            <p className="text-center text-xl mb-4">Think of securing a castle:</p>
            <div className="space-y-3 text-center text-lg w-full max-w-2xl">
                <p className="flex items-center justify-center"><span className="font-semibold text-gray-300 w-48 text-right">The Moat</span><ChevronRightIcon className="inline w-6 h-6 text-gray-500 mx-4"/><span className="text-left">Network Firewall / IPS (Stops common attacks)</span></p>
                <p className="flex items-center justify-center"><span className="font-semibold text-gray-300 w-48 text-right">Guards on the Walls</span><ChevronRightIcon className="inline w-6 h-6 text-gray-500 mx-4"/><span className="text-left">EDR on Endpoints (Catches what gets past the moat)</span></p>
                <p className="flex items-center justify-center"><span className="font-semibold text-gray-300 w-48 text-right">The Watchtower</span><ChevronRightIcon className="inline w-6 h-6 text-gray-500 mx-4"/><span className="text-left">SIEM (Sees everything happening in the kingdom)</span></p>
                <p className="flex items-center justify-center"><span className="font-semibold text-cyan-400 w-48 text-right">The Castle Commander</span><ChevronRightIcon className="inline w-6 h-6 text-gray-500 mx-4"/><span className="text-left">The SOC Analyst (Makes the strategic decisions)</span></p>
            </div>
            <p className="mt-8 italic text-gray-400">An attacker might get past one layer, but each additional layer makes their job harder and increases our chances of catching them.</p>
        </div>
    )
  },
  // --- THREAT INTELLIGENCE SECTION (SIMPLIFIED) ---
  // SLIDE 17: What is Threat Intelligence?
  {
    title: "Deep Dive: What is Threat Intelligence?",
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3 space-y-4">
          <p>Imagine you're a detective investigating a series of burglaries. You wouldn't just focus on one crime scene. You'd study all the criminals in the area, learn their methods, and predict where they might strike next.</p>
          <p>Threat Intelligence is the <span className="text-cyan-400 font-bold">"cyber detective's case file" on attackers</span>. It's not just a list of clues; it's analyzed information that provides context and helps us make faster, smarter security decisions by answering:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-xl">
            <li><span className="font-semibold">Who</span> is attacking our industry?</li>
            <li><span className="font-semibold">What</span> tools and tricks (TTPs) do they use?</li>
            <li><span className="font-semibold">How</span> can we specifically defend against *their* methods?</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center">
            <BrainIcon className="w-40 h-40 text-cyan-500 animate-fade-in" />
        </div>
      </div>
    ),
  },
  // SLIDE 18: Types of Threat Intelligence
  {
    title: 'Three Levels of Intelligence: For Everyone',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-lg h-full">
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center animate-slide-in-up" style={{animationDelay: '100ms'}}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Strategic (For the Boardroom)</h3>
          <p>This is the "big picture" overview. It's less technical and focuses on risks and trends. It answers the question, "Why should we invest more in security?" for executives, helping them make informed business and budget decisions.</p>
          <p className="mt-4 text-gray-400 italic">Example: "Ransomware attacks targeting healthcare providers have increased 50% this year, with an average cost of $2 million per incident."</p>
        </div>
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center animate-slide-in-up" style={{animationDelay: '200ms'}}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Tactical (For the Defenders)</h3>
          <p>This details the attacker's methods, or their "TTPs" (Tactics, Techniques, & Procedures). It answers, "How are they going to attack us?". This helps the security team build better defenses and configure their tools to spot specific behaviors.</p>
          <p className="mt-4 text-gray-400 italic">Example: "The 'Fancy Bear' hacking group often uses phishing emails with malicious Excel macros to gain initial access to employee computers."</p>
        </div>
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center animate-slide-in-up" style={{animationDelay: '300ms'}}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Operational (For the Machines)</h3>
          <p>This is the most specific, technical information about a current attack. It answers, "What should our security tools block *right now*?". This information can be fed directly into firewalls and other tools for automated blocking.</p>
          <p className="mt-4 text-gray-400 italic">Example: "Block all network traffic coming from the malicious IP address 123.45.67.89."</p>
        </div>
      </div>
    )
  },
  // SLIDE 19: Intelligence Lifecycle
  {
    title: 'How Intelligence is Made: The Lifecycle',
    content: (
      <div className="flex flex-col items-center">
        <IntelligenceLifecycleIcon className="w-32 h-32 text-cyan-400 mb-6"/>
        <p className="text-center mb-6 text-xl">High-quality intelligence doesn't just appear. It's created through a continuous, structured cycle to turn raw, noisy data into focused, useful insights. It's a never-ending loop of improvement.</p>
        <ol className="list-decimal list-inside space-y-2 text-left text-lg w-full max-w-3xl">
          <li><strong>Direction:</strong> Define the goal. Start by asking a question, like "Which ransomware groups are targeting our industry?"</li>
          <li><strong>Collection:</strong> Gather raw data from many sources: public news, technical blogs, dark web forums, and internal security sensors.</li>
          <li><strong>Processing:</strong> Organize this massive amount of raw data. Filter out the noise, translate languages, and format it so a person or computer can analyze it.</li>
          <li><strong>Analysis:</strong> This is the key human step. Experts connect the dots, identify patterns, and turn the processed data into actual intelligence.</li>
          <li><strong>Dissemination:</strong> Get the right intelligence to the right people (or systems) at the right time in a format they can use.</li>
          <li><strong>Feedback:</strong> Was the intelligence useful? Did it help stop an attack? This feedback helps refine the next cycle's direction.</li>
        </ol>
      </div>
    ),
  },
  // SLIDE 20: What are IOCs?
  {
    title: 'The Digital Clues: Indicators of Compromise (IOCs)',
    content: (
       <div className="flex flex-col items-center text-center">
          <SearchIcon className="w-32 h-32 text-yellow-400 mb-6"/>
          <p className="text-3xl">IOCs are the digital <span className="font-bold text-cyan-400">"fingerprints"</span> or <span className="font-bold text-cyan-400">"DNA evidence"</span> an attacker leaves behind at a crime scene.</p>
          <p className="mt-8 text-xl">They are specific, technical pieces of data that, if found on your network or computers, provide a high degree of confidence that a system has been compromised. They are the "smoking gun."</p>
          <p className="mt-4 text-xl">We feed these clues into our security tools (like a SIEM or firewall) so they can automatically watch for and block known malicious activity.</p>
      </div>
    ),
  },
  // SLIDE 21: IOCs: Network Clues
  {
    title: 'Common IOCs: Clues on the Network',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-cyan-400 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9h-9v9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 019 9h-9V3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 009 9v-9H3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 019-9v9H3z" /></svg>
          <h3 className="text-3xl font-bold mb-3">Malicious IP Addresses</h3>
          <p className="text-center text-gray-300 text-lg">An IP address is like the street address of a computer on the internet. Security researchers identify and publish lists of IP addresses that are known to be controlled by hackers. If one of your computers is communicating with an IP on this list, it's a major red flag that something is wrong.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-cyan-400 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
          <h3 className="text-3xl font-bold mb-3">Malicious Domain Names</h3>
          <p className="text-center text-gray-300 text-lg">A domain is the human-friendly name for a website (e.g., `www.google.com`). Attackers register thousands of domains for their malicious activities (e.g., `www.your-bank-login-update.com`). Blocking access to these known bad domains is a simple and highly effective defense.</p>
        </div>
      </div>
    )
  },
  // SLIDE 22: IOCs: Host-Based Clues
  {
    title: 'Common IOCs: Clues on the Computer',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg">
          <HashIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">File Hashes</h3>
          <p className="text-center text-gray-300 text-lg">A hash is a unique mathematical fingerprint for a file (like a checksum). Security researchers calculate and share the hashes of known virus files. Your security software can then scan your computer for any file with a matching hash and instantly know it's a virus, regardless of what the file is named.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg">
          <RegistryIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">Registry Keys & File Paths</h3>
          <p className="text-center text-gray-300 text-lg">Malware often needs to hide in specific folders or create specific entries in the system's settings (the Registry) to ensure it runs every time the computer starts. These specific "hideouts" are excellent and reliable indicators of a particular infection.</p>
        </div>
      </div>
    )
  },
  // SLIDE 23: From IOC to Action
  {
    title: 'From Clue to Automated Action',
    content: (
      <div className="text-center h-full flex flex-col justify-center">
        <p className="mb-8 text-2xl">The real power of IOCs is turning abstract clues into instant, automated protection for your entire organization. This is the core of modern, scalable security.</p>
        <div className="flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
          <div className="text-center animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            <p className="font-bold text-3xl">The Clue</p>
            <p className="text-lg text-gray-400">(A known malicious file hash)</p>
            <p className="font-mono text-yellow-400 mt-2 text-sm">e4d909c290d0fb1ca068ffaddf22cbd0</p>
          </div>
          <ChevronRightIcon className="w-16 h-16 text-gray-500 hidden md:block animate-fade-in" style={{animationDelay: '200ms'}}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 md:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
          <div className="text-center animate-slide-in-up" style={{ animationDelay: '400ms' }}>
            <p className="font-bold text-3xl">The Tool</p>
            <p className="text-lg text-gray-400">(The security platform)</p>
            <p className="text-cyan-400 mt-2 text-xl">SIEM or EDR</p>
          </div>
          <ChevronRightIcon className="w-16 h-16 text-gray-500 hidden md:block animate-fade-in" style={{animationDelay: '600ms'}}/>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 md:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
          <div className="text-center animate-slide-in-up" style={{ animationDelay: '800ms' }}>
            <p className="font-bold text-3xl">The Action</p>
            <p className="text-lg text-gray-400">(Across all 10,000 computers)</p>
            <p className="text-red-500 mt-2 text-xl">Automatically BLOCK & ALERT</p>
          </div>
        </div>
      </div>
    )
  },
  // SLIDE 24: Pyramid of Pain
  {
    title: 'The Pyramid of Pain: Defending Smarter, Not Harder',
    content: (
      <div className="flex flex-col items-center">
        <PyramidIcon className="w-64 h-64 text-cyan-400 mb-6" />
        <p className="text-center text-xl mb-4">This model helps defenders prioritize. Blocking indicators at the top of the pyramid causes the most "pain" to attackers, forcing them to abandon their tools and methods, which is very costly for them. Blocking things at the bottom is easy for them to bypass.</p>
        <p className="mt-4 text-lg text-gray-400 text-center w-full">
          <span className="text-red-400 font-bold">Most Painful for Attacker:</span> Blocking their Tactics, Techniques, and Procedures (TTPs).<br/>
          <span className="text-yellow-500">Annoying for them:</span> Blocking the specific tools they use or the network infrastructure they rely on.<br/>
          <span className="text-green-400">Trivial for them:</span> Blocking a single file hash or IP address. They can change these in seconds for free.
        </p>
      </div>
    ),
  },
  // SLIDE 25: Threat Feeds & Enrichment
  {
    title: 'Where Do Clues Come From? Feeds & Enrichment',
    content: (
      <div className="flex items-center">
        <FeedIcon className="w-56 h-56 text-cyan-400 mr-12 flex-shrink-0"/>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Threat Intelligence Feeds</h3>
          <p className="text-xl">You don't have to find all the clues yourself! Threat Feeds are like subscribing to a real-time <span className="font-semibold">"Most Wanted" list of cyber threats</span>. Security companies and research groups around the world constantly publish these feeds, streaming new IOCs (IPs, hashes, domains) directly into your security tools 24/7.</p>
          <h3 className="text-3xl font-bold mt-6">Data Enrichment</h3>
          <p className="text-xl">Enrichment is the process of adding context to make data useful. An IP address by itself is just a number. <span className="text-cyan-400">Enrichment</span> tells you that the IP address is located in Russia, belongs to the 'Fancy Bear' hacking group, and was used in an attack against a bank yesterday. It turns raw data into actionable intelligence.</p>
        </div>
      </div>
    )
  },
  // SLIDE 26: Threat Intelligence Platforms (TIPs)
  {
    title: 'Managing the Clues: Threat Intelligence Platforms (TIPs)',
    content: (
      <div className="flex flex-col items-center text-center">
          <BrainIcon className="w-32 h-32 text-cyan-400 mb-6"/>
          <p className="text-3xl mb-6">A TIP is a central <span className="font-bold">brain for all your threat intelligence</span>. If a SIEM is the control room, a TIP is the detective's office where all the case files and evidence boards are kept.</p>
          <ul className="list-disc list-inside text-left space-y-4 text-xl max-w-4xl">
              <li>It automatically <span className="font-semibold">collects and manages</span> data from dozens of different threat feeds (public, private, government), removing duplicates and standardizing the format.</li>
              <li>It helps analysts quickly <span className="font-semibold">find relationships</span> between different clues (IOCs) and security incidents, creating a bigger picture of an attack campaign.</li>
              <li>It acts as the <span className="font-semibold">"source of truth"</span> that automatically distributes the latest, most relevant blocking information to all other security tools (Firewalls, EDRs, etc.).</li>
          </ul>
      </div>
    )
  },
  // SLIDE 27: Sharing Standards: STIX & TAXII
  {
    title: 'A Universal Language for Threats: STIX & TAXII',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-2xl mb-6">How do thousands of security tools from hundreds of different companies all talk to each other to share threat information? They use a shared set of standards, just like how diplomats use a common language to communicate.</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
          <div className="bg-gray-800/40 p-6 rounded-lg">
              <p className="font-bold text-3xl text-cyan-400 mb-3">STIX: The Language</p>
              <p>STIX is the <span className="font-bold">grammar and vocabulary</span> for describing a threat. It provides a structured, machine-readable format to say "This IP address (IOC) is part of this phishing campaign (TTP) which is run by this specific hacking group."</p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-lg">
              <p className="font-bold text-3xl text-cyan-400 mb-3">TAXII: The Protocol</p>
              <p>TAXII is the <span className="font-bold">secure postal service</span> for sharing threat information. It's the transport mechanism that delivers the STIX-formatted "letters" between different organizations and security tools automatically and securely.</p>
          </div>
        </div>
      </div>
    )
  },
  // --- INCIDENT RESPONSE & PLANNING SECTION ---
  // SLIDE 28
  {
    title: 'Deep Dive: Incident Response & Planning',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">Analogy: The Fire Department's Official Procedure Manual</p>
        <p className="text-xl max-w-4xl">The <span className="text-cyan-400 font-bold">NIST</span> (National Institute of Standards and Technology) framework is the industry-standard "blueprint" for incident response. It provides a structured process to ensure a consistent, thorough, and defensible response to any incident.</p>
      </div>
    ),
  },
  // SLIDE 29
  {
    title: 'NIST Framework: Preparation',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Phase 1: Preparation - "Stocking the Firehouse"</h2>
        <p>This is the most critical phase, and it happens <span className="font-bold">before</span> an incident. If you fail to prepare, you prepare to fail. It's about ensuring all the tools, processes, and people are ready to go at a moment's notice.</p>
        <ul className="list-disc list-inside ml-4 space-y-3 text-xl">
          <li><strong>Tools:</strong> Are your SIEM, EDR, and forensic tools deployed, configured, and tested?</li>
          <li><strong>Team:</strong> Is your CSIRT (Cyber Security Incident Response Team) identified, with clear roles and contact info?</li>
          <li><strong>Training:</strong> Has the team been trained on the tools and practiced the response plan?</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 30
  {
    title: 'NIST Framework: Detection & Analysis',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Phase 2: Detection & Analysis - "Spotting the Smoke"</h2>
        <p>This phase is about moving from a potential clue to a confirmed incident. It involves not just finding one alert, but understanding its scope and impact.</p>
        <ul className="list-disc list-inside ml-4 space-y-3 text-xl">
          <li><strong>Detect:</strong> Identify the initial signs of an incident from your various security tools (EDR, logs, etc.).</li>
          <li><strong>Analyze:</strong> Correlate data to understand the "who, what, where, when, and how" of the attack. Is it one computer, or a hundred?</li>
          <li><strong>Document:</strong> Begin a formal log of all actions taken. This is critical for later analysis and legal purposes.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 31
  {
    title: 'NIST Framework: Containment, Eradication & Recovery',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Phase 3 & 4: The Core Response - "Fighting the Fire"</h2>
        <p>This is where the active "hands-on" response happens. These three steps are tightly related.</p>
        <ul className="list-disc list-inside ml-4 space-y-3 text-xl">
          <li><strong>Containment:</strong> Stop the bleeding! Isolate affected systems from the network. Change compromised passwords.</li>
          <li><strong>Eradication:</strong> Remove the attacker and their tools completely from your environment.</li>
          <li><strong>Recovery:</strong> Carefully restore the affected systems to normal operation from clean backups and monitor them closely.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 32
  {
    title: 'NIST Framework: Post-Incident Activity',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Phase 5: Post-Incident Activity - "Fireproofing the Building"</h2>
        <p>Often called "Lessons Learned," this is arguably the most valuable part of the process. An incident, while painful, is a learning opportunity you cannot afford to waste.</p>
        <ul className="list-disc list-inside ml-4 space-y-3 text-xl">
          <li><strong>Analyze the Incident:</strong> What was the root cause? How can we prevent it from happening again?</li>
          <li><strong>Improve Defenses:</strong> Create new detection rules, update security policies, and implement new tools or training.</li>
          <li><strong>Report:</strong> Finalize the incident report for management, legal, and compliance purposes.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 33
  {
    title: 'The Plan: What is a Playbook?',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <PlaybookIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>An IR Plan is the high-level strategy. A <span className="text-cyan-400 font-bold">Playbook</span> is the detailed, step-by-step checklist for a <span className="font-bold">specific type of incident</span>.</p>
          <p>Analogy: The fire department's strategy is "save lives and property." They have specific playbooks for a "kitchen fire," a "chemical spill," or a "forest fire." Each requires different steps and tools.</p>
          <p>In cybersecurity, you'll have different playbooks for Ransomware, Phishing, Data Exfiltration, etc.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 34
  {
    title: 'Playbooks vs. Runbooks',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <PlaybookIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">Playbook: The "What" and "Why"</h3>
          <p className="text-center text-gray-300 text-lg">A playbook is a strategic guide. It defines the phases of the response, the roles and responsibilities, and the overall goals for handling a specific incident type, like ransomware.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <RunbookIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">Runbook: The "How"</h3>
          <p className="text-center text-gray-300 text-lg">A runbook is a highly detailed, tactical set of instructions for a specific task within a playbook. It often includes exact commands to run or buttons to click in a specific tool.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 35
  {
    title: 'Anatomy of a Phishing Playbook',
    content: (
      <div className="space-y-4">
        <p>A good playbook is a clear, concise checklist. Here's a simplified example for a reported phishing email:</p>
        <ul className="list-decimal list-inside ml-4 space-y-3 text-xl bg-gray-800/50 p-6 rounded-lg">
          <li><strong>Triage:</strong> Analyze email headers and links in a safe environment (sandbox). Is it a real threat or spam?</li>
          <li><strong>Identify Scope:</strong> Did the user click the link? Did they enter credentials? Who else received this email?</li>
          <li><strong>Contain:</strong> If credentials were lost, reset the user's password immediately. Search for and delete the malicious email from all other mailboxes.</li>
          <li><strong>Eradicate:</strong> Block the sender's domain and the malicious link at the network level.</li>
          <li><strong>Communicate:</strong> Inform the user about the event and provide reminder security training.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 36
  {
    title: 'Communication is Key: The Comms Plan',
    content: (
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="text-2xl max-w-4xl">Technical response is only half the battle. How you <span className="font-bold text-cyan-400">communicate</span> during a crisis can make the difference between a controlled event and a public relations disaster.</p>
        <p className="mt-4 text-xl max-w-4xl">Your IR plan must have a dedicated Communications section that defines:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-xl text-left max-w-2xl">
          <li>Who is the single, authorized spokesperson?</li>
          <li>What information needs to be shared, and with whom?</li>
          <li>When should stakeholders (internal and external) be notified?</li>
          <li>Pre-approved templates for different scenarios.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 37
  {
    title: 'Legal & Compliance: The Rules of Engagement',
    content: (
       <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <GavelIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>Your response doesn't happen in a vacuum. Legal and compliance requirements are critical considerations.</p>
          <p>Your legal team must be involved early to provide guidance on:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li><strong>Data Breach Notification Laws:</strong> Many regulations (like GDPR) have strict timelines for notifying customers and regulators.</li>
            <li><strong>Evidence Preservation:</strong> How to collect and handle digital evidence so it's admissible in court (Chain of Custody).</li>
            <li><strong>Attorney-Client Privilege:</strong> Involving lawyers can protect sensitive communications about the incident.</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 38
  {
    title: 'Practice Makes Perfect: Tabletop Exercises',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">A plan you've never practiced is just a piece of paper.</p>
        <p className="text-xl">A tabletop exercise is a <span className="text-cyan-400 font-bold">simulated cyberattack</span> conducted in a conference room. The response team talks through each step of the IR plan in response to a developing scenario, without touching any real systems.</p>
        <p className="text-xl mt-4">The goal is to find gaps in the plan, identify areas of confusion, and build "muscle memory" before a real crisis hits.</p>
      </div>
    ),
  },
  // SLIDE 39
  {
    title: 'Example Tabletop Scenario: Ransomware',
    content: (
      <div className="space-y-4">
        <p>An exercise starts with a simple inject and evolves based on the team's decisions:</p>
        <div className="p-6 bg-gray-800/50 rounded-lg mt-4 space-y-3 text-lg">
            <p><span className="font-bold text-gray-400">Inject 1:</span> "It's 2 AM. An automated alert fires for suspected ransomware on a server in the accounting department. What do you do?"</p>
            <p><span className="font-bold text-gray-400">Inject 2:</span> (After team decides to isolate server) "You've isolated the server, but now users are reporting they can't access shared files. The CEO is calling. What's your response?"</p>
             <p><span className="font-bold text-gray-400">Inject 3:</span> "You find a ransom note. The attacker is demanding $1 million in Bitcoin. Do you pay? Who makes that decision?"</p>
        </div>
        <p className="pt-4 text-xl">These exercises quickly reveal if your plan is practical and effective in a high-pressure situation.</p>
      </div>
    )
  },
  // SLIDE 40
  {
    title: 'The CSIRT: Assembling Your Response Team',
    content: (
      <div className="space-y-4">
        <p>A successful response requires a cross-functional <span className="text-cyan-400 font-bold">Cyber Security Incident Response Team (CSIRT)</span>. It's more than just the security team.</p>
        <p>Core members often include representatives from:</p>
        <div className="grid grid-cols-2 gap-4 text-xl">
          <ul className="list-disc list-inside">
            <li>Security Operations (SOC)</li>
            <li>IT Infrastructure</li>
            <li>Legal & Compliance</li>
            <li>Human Resources</li>
          </ul>
           <ul className="list-disc list-inside">
            <li>Public Relations / Comms</li>
            <li>Executive Leadership</li>
            <li>Help Desk</li>
            <li>Application Owners</li>
          </ul>
        </div>
        <p className="pt-4 text-xl">Each member brings a unique perspective and set of responsibilities, ensuring a holistic response.</p>
      </div>
    ),
  },
  // SLIDE 41
  {
    title: 'Evidence Handling: Chain of Custody',
    content: (
      <div className="space-y-6">
        <p>If an incident leads to legal action, proving your evidence wasn't tampered with is crucial. The <span className="text-cyan-400 font-bold">Chain of Custody</span> is the chronological paper trail documenting the collection, control, transfer, and analysis of evidence.</p>
        <p>It's a formal process that answers:</p>
        <ul className="list-disc list-inside ml-4 space-y-3 text-xl">
          <li>What evidence was collected? (e.g., a hard drive image)</li>
          <li>Who collected it, and when?</li>
          <li>Where has it been stored?</li>
          <li>Who has had access to it, and for what reason?</li>
        </ul>
        <p>Maintaining this chain ensures the integrity of your forensic investigation.</p>
      </div>
    ),
  },
  // SLIDE 42
  {
    title: 'IR in the Real World: It\'s Messy',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">Your plan will never survive first contact with a real incident... and that's okay.</p>
        <p className="text-xl">The goal of planning and practice is not to predict the future perfectly. It's to build a team that is <span className="text-cyan-400 font-bold">resilient, adaptable, and calm under pressure</span>.</p>
        <p className="text-xl mt-6">A good plan provides the structure and guidance to make smart decisions when things inevitably go wrong. It turns chaos into manageable problems.</p>
      </div>
    ),
  },
  // --- TOOLS & TECHNOLOGIES SECTION ---
  // SLIDE 43
  {
    title: 'Deep Dive: The Security Toolkit in Action',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <ToolsIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-3xl mb-6">Let's look closer at the specific tools and technologies that power a modern Security Operations Center (SOC).</p>
            <p className="text-xl">We'll explore how these tools work together to provide visibility, enable detection, and facilitate a rapid response to threats.</p>
        </div>
    ),
  },
  // SLIDE 44
  {
      title: 'SIEM: The Security Control Room',
      content: (
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                  <SIEMIcon className="w-40 h-40 text-cyan-500" />
              </div>
              <div className="md:w-2/3 space-y-4">
                  <p>A <span className="text-cyan-400 font-bold">SIEM (Security Information and Event Management)</span> is the central hub for all security data. It's like the central control room of a security operation, with video feeds (logs) coming in from every camera (security tool) in the building.</p>
                  <p>Its primary jobs are:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
                      <li><strong>Log Aggregation:</strong> Collects logs from everything: firewalls, servers, endpoints, and applications.</li>
                      <li><strong>Correlation:</strong> Automatically connects seemingly unrelated events from different sources to identify a larger attack pattern.</li>
                      <li><strong>Alerting:</strong> Generates an alert for the security team when a high-confidence attack pattern is detected.</li>
                  </ul>
              </div>
          </div>
      ),
  },
  // SLIDE 45
  {
    title: 'Example SIEM Correlation Rule',
    content: (
      <div className="space-y-4">
          <p>This is what makes a SIEM so powerful. It's not just a log collector; it's an intelligent analysis engine. A human analyst might write a rule like this in plain English:</p>
          <div className="p-6 bg-gray-800/50 rounded-lg mt-4 text-lg">
              <p className="font-bold text-cyan-400 text-xl mb-2">SIEM RULE: "Potential Brute-Force Attack"</p>
              <p><strong className="text-gray-400">IF:</strong> A single user account has more than <span className="text-yellow-400">100 failed login attempts</span> in <span className="text-yellow-400">1 minute</span>,</p>
              <p><strong className="text-gray-400">AND THEN:</strong> That same user has a <span className="text-green-400">successful login</span> from a <span className="text-yellow-400">new country</span>,</p>
              <p><strong className="text-red-500">THEN:</strong> Create a <span className="text-red-500 font-bold">CRITICAL</span> alert and send it to the SOC team immediately.</p>
          </div>
          <p className="pt-4 text-xl">This automates the process of finding the "needle in the haystack" across billions of log entries.</p>
      </div>
    )
  },
  // SLIDE 46
  {
    title: 'IDS/IPS: The Network Border Patrol',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <IDSIcon className="w-24 h-24 text-yellow-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">IDS: The Burglar Alarm</h3>
          <p className="text-center text-gray-300 text-lg"><span className="text-yellow-400 font-bold">(Intrusion Detection System)</span> An IDS watches a copy of network traffic. When it sees something malicious (like a known attack signature), it <span className="font-bold">sends an alert</span>. It tells you someone is breaking in, but it can't stop them itself.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <ShieldCheckIcon className="w-24 h-24 text-green-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">IPS: The Automated Guard</h3>
          <p className="text-center text-gray-300 text-lg"><span className="text-green-400 font-bold">(Intrusion Prevention System)</span> An IPS sits directly in the path of network traffic. When it sees something malicious, it doesn't just alert; it <span className="font-bold">actively blocks</span> the traffic, preventing the attack from ever reaching its target.</p>
        </div>
      </div>
    )
  },
  // SLIDE 47
  {
    title: 'EDR: The On-Site Detective',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <EndpointIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>An <span className="text-cyan-400 font-bold">Endpoint Detection & Response (EDR)</span> tool provides the deepest level of visibility by living directly on the "endpoints" (laptops, servers, etc.).</p>
          <p>It's not just a detection tool; the "R" for <span className="font-bold">Response</span> is critical. It gives security analysts the power to:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li><strong>Isolate a machine:</strong> Remotely disconnect a compromised computer from the network to stop an attack from spreading.</li>
            <li><strong>Kill a process:</strong> Terminate a malicious program that is running on the endpoint.</li>
            <li><strong>Investigate live:</strong> Directly access the machine to perform forensic analysis in real-time.</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 48
  {
    title: 'SOAR: The Automated First Responder',
    content: (
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="text-2xl max-w-4xl"><span className="text-cyan-400 font-bold">Security Orchestration, Automation, and Response (SOAR)</span> platforms act as the "robot" for your security team.</p>
        <p className="mt-4 text-xl max-w-4xl">They take the alerts generated by your other tools (like the SIEM) and automatically perform the initial investigation and response steps defined in your playbooks, freeing up human analysts to focus on more complex threats.</p>
        <p className="mt-4 text-xl max-w-4xl">A SOAR tool turns a multi-step manual process into a single automated workflow.</p>
      </div>
    ),
  },
  // SLIDE 49
  {
    title: 'SOAR in Action: Automating a Phishing Response',
    content: (
      <div className="space-y-4">
        <p>Instead of an analyst manually performing each step, a SOAR platform can automate the entire workflow:</p>
        <div className="relative p-4 mt-4">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700"></div>
            <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">1. Alert Ingested</h3><p className="text-base text-gray-400">SIEM sends "Phishing Email Reported" alert to SOAR.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">2. Automated Analysis</h3><p className="text-base text-gray-400">SOAR automatically extracts the link from the email and runs it in a sandbox.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">3. Verdict Reached</h3><p className="text-base text-gray-400">Sandbox confirms the link leads to a malicious site. SOAR declares a "true positive" incident.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">4. Automated Response</h3><p className="text-base text-gray-400">SOAR automatically blocks the domain on the firewall, searches for the email in all user mailboxes, and deletes it.</p>
            </div>
        </div>
      </div>
    ),
  },
  // SLIDE 50
  {
    title: 'Log Management & Forensics',
    content: (
       <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <ForensicsIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h3 className="text-3xl font-bold text-cyan-400 mb-3">Log Management is the Foundation</h3>
          <p>If you don't record it, you can't investigate it. Effective logging across all systems is the bedrock of detection and response. Tools like SIEMs centralize these logs for easy searching.</p>
          <h3 className="text-3xl font-bold text-cyan-400 mb-3 mt-4">Forensic Tools: The CSI Kit</h3>
          <p>When a major incident occurs, you need to perform a deep "digital crime scene investigation." Forensic tools allow analysts to create a perfect copy of a compromised system's hard drive and memory to analyze exactly what an attacker did, step by step.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 51
  {
    title: 'Tool: Network Packet Capture',
    content: (
      <div className="space-y-6">
        <p>This is one of the most powerful—and complex—tools in an analyst's arsenal. It's like having a high-speed camera that records <span className="font-bold">every single conversation</span> happening on your network.</p>
        <p className="text-xl">Tools like <span className="font-mono text-cyan-400">Wireshark</span> allow you to see the raw, unfiltered data being exchanged. While a SIEM gives you a summary ("User A logged into Server B"), a packet capture shows you the exact content of that login request.</p>
        <p>This provides the ultimate source of truth but generates enormous amounts of data. It's typically used to investigate a specific, high-priority incident rather than for continuous monitoring.</p>
      </div>
    ),
  },
  // SLIDE 52
  {
    title: 'Tool: Vulnerability Scanners',
    content: (
      <div className="space-y-6">
        <p>A Vulnerability Scanner is a proactive tool used to find security weaknesses <span className="font-bold">before</span> an attacker does. It's like hiring a professional to check all the doors and windows of your house to make sure they're locked and secure.</p>
        <p>Tools like <span className="font-mono text-cyan-400">Nessus</span> or <span className="font-mono text-cyan-400">Qualys</span> automatically scan all computers on a network and check for:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>Missing security patches</li>
            <li>Out-of-date software</li>
            <li>Common misconfigurations</li>
            <li>Known vulnerabilities (CVEs)</li>
        </ul>
        <p>The scanner produces a detailed report that the IT team can use to prioritize and fix the weaknesses.</p>
      </div>
    ),
  },
  // SLIDE 53
  {
    title: 'Tool: Sandboxing',
    content: (
      <div className="space-y-6">
        <p>How do you safely analyze a file that might be a virus? You open it in a <span className="text-cyan-400 font-bold">Sandbox</span>.</p>
        <p>A sandbox is a secure, isolated virtual environment—a "disposable computer"—that is completely separate from your real network. When a suspicious file is opened inside the sandbox, we can safely observe its behavior without any risk to our actual systems.</p>
        <p className="text-xl">If the file turns out to be malicious, we simply delete the sandbox. No harm is done. This is a critical tool for both automated systems (like SOAR) and human malware analysts.</p>
      </div>
    ),
  },
  // SLIDE 54
  {
    title: 'Real World Example: Splunk (SIEM)',
    content: (
      <div className="space-y-6">
        <p><span className="text-cyan-400 font-bold">Splunk</span> is one of the most widely-used SIEM and log management platforms in the world. It excels at taking massive amounts of unstructured data from virtually any source and making it searchable and analyzable in real-time.</p>
        <p>A SOC analyst might use Splunk to:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>Search logs from all 500 of the company's web servers at once to find a specific error message.</li>
            <li>Create dashboards that visualize login trends from around the world.</li>
            <li>Build correlation rules that automatically detect suspicious patterns across different log types.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 55
  {
    title: 'Real World Example: CrowdStrike (EDR/XDR)',
    content: (
      <div className="space-y-6">
        <p><span className="text-cyan-400 font-bold">CrowdStrike Falcon</span> is a leading EDR platform that is delivered from the cloud. It uses a single, lightweight "agent" on each endpoint to provide powerful detection and response capabilities.</p>
        <p>What makes it powerful is its combination of methods:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>It uses <span className="font-semibold">AI and Machine Learning</span> to detect never-before-seen malware based on its behavior.</li>
            <li>It uses <span className="font-semibold">Threat Intelligence</span> from its global network of sensors to block known threats.</li>
            <li>It gives analysts the ability to perform <span className="font-semibold">real-time response</span> actions, like isolating a device, from a central web console.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 56
  {
    title: 'Real World Example: Snort (IDS/IPS)',
    content: (
      <div className="space-y-6">
        <p><span className="text-cyan-400 font-bold">Snort</span> is an open-source IDS/IPS that has been a foundational tool in network security for decades. It's powerful, flexible, and free, making it a popular choice for many organizations.</p>
        <p>Snort works by analyzing network traffic in real-time and comparing it against a set of <span className="font-bold">rules</span>. These rules can be simple or incredibly complex:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>A simple rule might be: "Alert if you see traffic from this known malicious IP address."</li>
            <li>A complex rule might be: "Alert if you see a web request that looks like a specific type of SQL injection attack."</li>
        </ul>
        <p>The security community constantly writes and shares new Snort rules to detect emerging threats.</p>
      </div>
    ),
  },
  // SLIDE 57
  {
    title: 'How The Tools Work Together',
    content: (
      <div className="space-y-4">
        <p>Let's trace an alert through this integrated toolkit:</p>
        <div className="relative p-4 mt-4">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700"></div>
            <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">1. Detection</h3><p className="text-base text-gray-400">The <span className="font-bold">EDR</span> agent on a laptop detects a program behaving like ransomware and sends an alert.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">2. Centralization</h3><p className="text-base text-gray-400">The <span className="font-bold">SIEM</span> receives the EDR alert and correlates it with firewall logs showing the laptop recently communicated with a known malicious IP address from a threat feed.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">3. Automation</h3><p className="text-base text-gray-400">The SIEM forwards a high-confidence alert to the <span className="font-bold">SOAR</span> platform.</p>
            </div>
             <div className="relative pl-8 mb-4">
                <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -left-[18px] top-1 border-4 border-gray-900"></div>
                <h3 className="font-bold text-lg">4. Response</h3><p className="text-base text-gray-400">The SOAR playbook runs: it automatically tells the EDR to isolate the laptop from the network and creates a ticket for a SOC analyst.</p>
            </div>
        </div>
      </div>
    )
  },
  // --- REAL-WORLD CASE STUDIES SECTION ---
  // SLIDE 58
  {
    title: 'Deep Dive: Real-World Case Studies & Simulations',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CaseStudyIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-3xl mb-6">Let's see how these concepts apply in the real world.</p>
            <p className="text-xl">Studying past security incidents and practicing our defenses are two of the most effective ways to prepare for future attacks.</p>
        </div>
    ),
  },
  // SLIDE 59
  {
      title: 'Why We Study Past Attacks',
      content: (
          <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-4xl mb-6">"Those who cannot remember the past are condemned to repeat it."</p>
              <p className="text-xl">In cybersecurity, studying major security breaches is not about assigning blame. It's about learning critical lessons to improve our collective defenses.</p>
              <p className="text-xl mt-4">By dissecting how attackers succeeded, we can:</p>
              <ul className="list-disc list-inside text-left space-y-2 text-xl mt-4 max-w-2xl">
                  <li>Identify common patterns and tactics.</li>
                  <li>Understand the real-world impact of specific vulnerabilities.</li>
                  <li>Justify security investments to prevent similar incidents.</li>
              </ul>
          </div>
      ),
  },
  // SLIDE 60
  {
      title: 'Case Study: SolarWinds (2020)',
      content: (
          <div className="space-y-4">
              <h2 className="text-3xl font-bold text-cyan-400">The Attack: A Digital "Trojan Horse"</h2>
              <p>This was a sophisticated <span className="font-bold">supply chain attack</span>. Instead of attacking their targets directly, hackers broke into a software company called SolarWinds. They secretly added their own malicious code into a legitimate software update for a popular IT management tool.</p>
              <p>Thousands of companies, including government agencies, downloaded this "trusted" update, unknowingly installing a backdoor for the attackers onto their own networks.</p>
              <div className="p-6 bg-red-900/30 rounded-lg mt-4 text-lg border border-red-500">
                  <p><strong className="text-red-400">Lesson Learned:</strong> Your security is only as strong as the security of your least secure vendor. The "Assume Breach" model is critical, because you can't always trust software, even from a known source.</p>
              </div>
          </div>
      ),
  },
  // SLIDE 61
  {
      title: 'Case Study: Colonial Pipeline (2021)',
      content: (
          <div className="space-y-4">
              <h2 className="text-3xl font-bold text-cyan-400">The Attack: One Password, Catastrophic Impact</h2>
              <p>This ransomware attack shut down a major U.S. fuel pipeline, causing fuel shortages along the East Coast. The initial entry point was not a sophisticated zero-day exploit.</p>
              <p>It was a single, compromised password for a VPN account that was discovered on the dark web. Crucially, that account <span className="font-bold">did not have Multi-Factor Authentication (MFA)</span> enabled.</p>
              <div className="p-6 bg-red-900/30 rounded-lg mt-4 text-lg border border-red-500">
                  <p><strong className="text-red-400">Lesson Learned:</strong> The simplest security measures are often the most critical. A single password is not enough to protect critical infrastructure. Enforcing MFA everywhere is one of the most effective defenses against a wide range of attacks.</p>
              </div>
          </div>
      ),
  },
  // SLIDE 62
  {
      title: 'Case Study: Healthcare Ransomware',
      content: (
          <div className="space-y-4">
              <h2 className="text-3xl font-bold text-cyan-400">The Ongoing Threat</h2>
              <p>Healthcare organizations are a constant target for ransomware gangs. Attackers know that by encrypting patient records and critical hospital systems, they create a life-or-death situation that puts immense pressure on the hospital to pay the ransom quickly.</p>
              <p>These attacks have led to canceled surgeries, delayed medical treatments, and have forced hospitals to divert patients, putting lives at risk.</p>
              <div className="p-6 bg-red-900/30 rounded-lg mt-4 text-lg border border-red-500">
                  <p><strong className="text-red-400">Lesson Learned:</strong> The impact of a cyberattack is not just financial. For critical infrastructure sectors like healthcare, energy, and finance, a digital attack can have severe real-world, physical consequences.</p>
              </div>
          </div>
      ),
  },
  // SLIDE 63
  {
      title: 'Proactive Defense: The MITRE ATT&CK Framework',
      content: (
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                  <MitreIcon className="w-40 h-40 text-cyan-500" />
              </div>
              <div className="md:w-2/3 space-y-4">
                  <p>How do we learn from all these attacks in a structured way? We use the <span className="text-cyan-400 font-bold">MITRE ATT&CK Framework</span>.</p>
                  <p>Think of it as the <span className="font-bold">"Encyclopedia of Hacking Techniques."</span> It's a massive, globally-accessible knowledge base of every known adversary tactic, technique, and procedure (TTP), from initial access to final impact.</p>
                  <p>It gives defenders a common language to describe how attackers operate.</p>
              </div>
          </div>
      ),
  },
  // SLIDE 64
  {
      title: 'How to Use ATT&CK: Mapping Defenses',
      content: (
          <div className="space-y-6">
              <p>The framework is organized as a large matrix. Each column is a <span className="font-bold">tactic</span> (the attacker's goal, like "Privilege Escalation"), and each cell in that column is a specific <span className="font-bold">technique</span> (how they achieve that goal).</p>
              <p>Defenders use this to perform <span className="text-cyan-400 font-bold">"Coverage Mapping."</span> They go through the matrix, technique by technique, and ask:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
                  <li>Do we have a security tool that can <span className="text-green-400">prevent</span> this technique?</li>
                  <li>Do we have a log source that can <span className="text-yellow-400">detect</span> this technique?</li>
                  <li>If not, we have a <span className="text-red-500">gap in our visibility</span> that we need to fix.</li>
              </ul>
          </div>
      ),
  },
  // SLIDE 65
  {
      title: 'Simulating Attacks: Red Team vs. Blue Team',
      content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="flex flex-col items-center justify-center p-6 bg-red-900/40 rounded-lg">
                  <h3 className="text-3xl font-bold mb-3 text-red-400">Red Team: The "Attackers"</h3>
                  <p className="text-center text-gray-300 text-lg">This is a team of ethical hackers whose job is to simulate a real-world adversary. They use the same TTPs as real attackers to test the organization's defenses and try to achieve a specific goal (e.g., steal a specific file).</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-blue-900/40 rounded-lg">
                  <h3 className="text-3xl font-bold mb-3 text-blue-400">Blue Team: The "Defenders"</h3>
                  <p className="text-center text-gray-300 text-lg">This is the organization's internal SOC team. Their job is to use their existing tools and processes to detect and respond to the Red Team's simulated attack as if it were a real incident.</p>
              </div>
          </div>
      ),
  },
  // SLIDE 66
  {
      title: 'The Next Level: Purple Teaming',
      content: (
          <div className="flex flex-col items-center text-center">
              <PurpleTeamIcon className="w-32 h-32 text-purple-400 mb-6"/>
              <p className="text-3xl mb-6">A Red vs. Blue exercise is a "sparring match." A <span className="text-purple-400 font-bold">Purple Team</span> exercise is a "coaching session."</p>
              <p className="text-xl">Instead of a surprise attack, the Red and Blue teams work together in real-time. The Red Team will announce, "I am now attempting Technique X." If the Blue Team doesn't see it, they can work together to figure out why and fix the detection gap on the spot.</p>
              <p className="text-xl mt-4">It's a highly collaborative and efficient way to rapidly improve security visibility and response capabilities.</p>
          </div>
      ),
  },
  // SLIDE 67
  {
    title: 'The Goal of Simulation: Building Muscle Memory',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">Why do we practice fire drills? So that when a real fire happens, we don't panic. We know exactly where to go and what to do.</p>
        <p className="text-xl">Red, Blue, and Purple team exercises are the cybersecurity equivalent of a fire drill. They build <span className="text-cyan-400 font-bold">"muscle memory"</span> for the defenders.</p>
        <p className="text-xl mt-6">By practicing against a simulated attacker, the SOC team learns to trust their tools, refine their processes, and communicate effectively under pressure, making them much more effective when a real incident occurs.</p>
      </div>
    ),
  },
  // --- CONCLUSION ---
  // SLIDE 68
  {
    title: 'Key Takeaways',
    content: (
      <div className="flex flex-col justify-center h-full">
        <ul className="list-disc list-inside space-y-3 text-2xl">
          <li>Modern security is about <span className="text-cyan-400">visibility, rapid response, and assuming breach</span>.</li>
          <li>A mix of <span className="text-cyan-400">signature, anomaly, and behavioral</span> detection is required to counter diverse threats.</li>
          <li><span className="text-cyan-400">Threat Intelligence</span> provides the context and clues (IOCs) needed to be proactive.</li>
          <li>A structured <span className="text-cyan-400">Incident Response Plan</span> (like the NIST framework) turns chaos into a manageable process.</li>
          <li>The modern security toolkit (<span className="text-cyan-400">SIEM, EDR, SOAR, etc.</span>) is an integrated system designed to automate detection and speed up response.</li>
          <li>Learning from <span className="text-cyan-400">real-world incidents</span> and practicing through <span className="text-cyan-400">simulations</span> are essential for building a resilient defense.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 69 (was 70)
  // --- NEW SECTION: BUILDING A RESILIENT RESPONSE PROGRAM ---
  {
    title: 'Deep Dive: Building a Resilient Response Program',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">Detection is only half the battle.</p>
        <p className="text-xl">A truly secure organization can not only fight the fire but rebuild stronger afterwards. Let's explore how to build that <span className="text-cyan-400 font-bold">resilience</span>.</p>
      </div>
    ),
  },
  // SLIDE 70 (was 71)
  {
    title: 'Who Answers the 911 Call? The CSIRT',
    content: (
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="text-2xl max-w-4xl">A <span className="text-cyan-400 font-bold">CSIRT (Cyber Security Incident Response Team)</span> is the pre-assigned group that manages a crisis. It's more than just the IT department.</p>
        <p className="mt-4 text-xl max-w-4xl">Think of it as the emergency response crew, with specialists from:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-lg text-left max-w-sm">
          <li>IT & Security (The technical experts)</li>
          <li>Legal (The rule-keepers)</li>
          <li>Communications / PR (The storytellers)</li>
          <li>Human Resources (The people-experts)</li>
          <li>Leadership (The decision-makers)</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 71 (was 72)
  {
    title: 'Key Roles in a Crisis',
    content: (
      <div className="space-y-4">
        <p className="text-center text-2xl mb-6">To avoid chaos, every response team needs clear leadership and defined roles.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Incident Commander</h3>
            <p>The overall leader. They don't fight the fire; they direct the firefight. They make the big strategic decisions and communicate with leadership.</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Technical Lead</h3>
            <p>The lead investigator. This person is the expert who is deep in the technical details, trying to understand how the attacker got in and how to get them out.</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Communications Lead</h3>
            <p>Manages the story. They handle all communication with customers, employees, and the media, ensuring the message is clear, consistent, and calm.</p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Scribe (Documenter)</h3>
            <p>A critical but often overlooked role. This person documents every action taken, every decision made, and every finding. This log is vital for later analysis and legal defense.</p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 72 (was 73)
  {
    title: 'The Most Important Tool: A Blameless Culture',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">Fear is the enemy of good incident response.</p>
        <p className="text-xl max-w-4xl">When an incident happens, the goal is to fix the problem, not to find someone to blame. If an employee is afraid to report a mistake (like clicking a phishing link), they will hide it. A hidden problem can quickly grow from a small fire into an uncontrollable inferno.</p>
        <p className="text-xl mt-6 p-4 bg-green-900/30 rounded-lg border border-green-500">A culture of trust and shared responsibility encourages early reporting, which leads to faster response and less damage.</p>
      </div>
    ),
  },
  // SLIDE 73 (was 74)
  {
    title: 'How Do We Know If We\'re Getting Better?',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <TrendingUpIcon className="w-32 h-32 text-cyan-400 mb-6" />
        <p className="text-3xl mb-6">"You can't improve what you don't measure."</p>
        <p className="text-xl">Just like a doctor tracks a patient's vital signs, we use metrics to track the health of our security program.</p>
        <p className="text-xl mt-4">Metrics help us identify weaknesses, justify security investments to leadership, and show progress over time. Let's look at two of the most important ones.</p>
      </div>
    ),
  },
  // SLIDE 74 (was 75)
  {
    title: 'Key Metric: MTTD (Mean Time to Detect)',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 h-full">
        <div className="md:w-1/3 flex justify-center">
            <EyeIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">MTTD</h2>
          <p className="text-2xl font-semibold text-cyan-400">Mean Time to Detect</p>
          <p className="text-xl"><strong className="text-gray-300">The Question:</strong> "How long does it take us to realize an attacker is in our network?"</p>
          <p className="text-xl"><strong className="text-gray-300">Analogy:</strong> This is the time between when a burglar breaks a window and when your alarm goes off. The shorter the time, the less they can steal.</p>
          <p className="text-xl"><strong className="text-gray-300">The Goal:</strong> Make this number as low as possible. Days? Hours? Minutes?</p>
        </div>
      </div>
    ),
  },
  // SLIDE 75 (was 76)
  {
    title: 'Key Metric: MTTR (Mean Time to Respond)',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8 h-full">
        <div className="md:w-1/3 flex justify-center">
            <ClockIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">MTTR</h2>
          <p className="text-2xl font-semibold text-cyan-400">Mean Time to Respond / Resolve</p>
          <p className="text-xl"><strong className="text-gray-300">The Question:</strong> "Once we get an alarm, how long does it take us to fix the problem?"</p>
          <p className="text-xl"><strong className="text-gray-300">Analogy:</strong> This is the time from when the fire alarm rings to when the fire department has put the fire out completely.</p>
          <p className="text-xl"><strong className="text-gray-300">The Goal:</strong> Make this number as low as possible. This shows how efficient your team and playbooks are.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 76 (was 77)
  {
    title: 'From Response to Resilience',
    content: (
       <div className="space-y-6">
        <p>Incident Response is about *reacting* to a bad event. Cyber Resilience is the ability to *anticipate, withstand, recover from, and adapt* to an attack.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-gray-800/40 rounded-lg">
                <h3 className="font-bold text-2xl text-cyan-400 mb-2">Response</h3>
                <p>"We have a plan to put out the fire."</p>
            </div>
            <div className="p-6 bg-cyan-900/30 rounded-lg border border-cyan-500">
                <h3 className="font-bold text-2xl text-cyan-400 mb-2">Resilience</h3>
                <p>"Our building is made of fireproof materials, has a sprinkler system, and a clear evacuation plan. We can handle a fire and be back in business tomorrow."</p>
            </div>
        </div>
        <p className="text-xl pt-4">Resilience means assuming you will be hit and building your systems to survive and recover quickly.</p>
      </div>
    ),
  },
  // SLIDE 77 (was 78)
  {
    title: 'Resilience in Action: Business Continuity Planning (BCP)',
    content: (
       <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <ClipboardDocumentCheckIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>BCP is the <span className="font-bold">business-focused</span> plan to keep the lights on during any crisis (not just a cyberattack).</p>
          <p>It's not about IT; it's about the business itself. It answers questions like:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>If our main office is unavailable, how will employees work?</li>
            <li>How will we continue to take customer orders?</li>
            <li>How will we pay our staff and suppliers?</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 78 (was 79)
  {
    title: 'Resilience in Action: Disaster Recovery (DR)',
    content: (
      <div className="space-y-4">
        <p>If BCP is the "business" plan, DR is the detailed <span className="text-cyan-400 font-bold">technical</span> plan to support it.</p>
        <p className="text-2xl text-center p-4">BCP says <span className="text-yellow-400">WHAT</span> the business needs to survive.<br/>DR says <span className="text-yellow-400">HOW</span> IT will deliver it.</p>
        <p>The DR plan has the step-by-step technical instructions for the IT team to:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-xl">
            <li>Rebuild critical servers at an alternate location.</li>
            <li>Restore data from backups.</li>
            <li>Re-establish network connections and get systems back online.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 79 (was 80)
  {
    title: 'The Ultimate Safety Net: Backups',
    content: (
      <div className="flex flex-col items-center text-center">
        <ArchiveBoxIcon className="w-32 h-32 text-cyan-400 mb-6"/>
        <p className="text-3xl mb-6">In a ransomware attack, good backups are the difference between a bad day and a closed business.</p>
        <p className="text-xl mb-6">The <span className="text-cyan-400 font-bold">3-2-1 Rule</span> is a simple, powerful strategy:</p>
        <div className="text-left text-2xl space-y-3 bg-gray-800/40 p-6 rounded-lg">
          <p><span className="font-bold text-cyan-400">3</span> copies of your data...</p>
          <p><span className="font-bold text-cyan-400">2</span> on different types of media (e.g., hard drive and cloud)...</p>
          <p><span className="font-bold text-cyan-400">1</span> copy kept <span className="text-red-500 underline">off-site and offline</span>.</p>
        </div>
        <p className="mt-6 text-lg italic text-gray-400">That offline copy is critical because ransomware can't encrypt what it can't reach.</p>
      </div>
    ),
  },
  // SLIDE 80 (was 81)
  {
    title: 'The Most Important Meeting: The Post-Incident Review',
    content: (
      <div className="flex flex-col justify-center items-center h-full text-center">
        <p className="text-2xl max-w-4xl">After every incident, no matter how small, the response team holds a "Lessons Learned" or "Post-Mortem" meeting. This is a formal, blameless review of what happened.</p>
        <p className="mt-4 text-xl max-w-4xl">Key questions to answer:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-xl text-left max-w-md">
          <li>What was the exact timeline of events?</li>
          <li>What did we do well?</li>
          <li>What could we have done better?</li>
          <li>What will we change to improve for next time?</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 81 (was 82)
  {
    title: 'Closing the Feedback Loop',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl mb-6">A review is useless if nothing changes.</p>
        <p className="text-xl">The feedback loop is the process of turning those "lessons learned" into concrete, assigned, and tracked actions.</p>
        <div className="mt-4 p-6 bg-gray-800/50 rounded-lg text-lg w-full max-w-3xl">
          <p><strong className="text-red-400">Finding:</strong> "It took us 4 hours to find the right person on the network team."</p>
          <p className="my-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg></p>
          <p><strong className="text-green-400">Action:</strong> "Create a formal, up-to-date contact list for the CSIRT, review it quarterly, and store it in a secure, accessible location."</p>
        </div>
        <p className="mt-4 text-xl">This continuous cycle of `Incident → Review → Improvement` is how a security program matures.</p>
      </div>
    ),
  },
  // SLIDE 82 (was 83)
  {
    title: 'Building Resilience: Key Takeaways',
    content: (
      <div className="flex flex-col justify-center h-full">
        <ul className="list-disc list-inside space-y-3 text-2xl">
          <li>A resilient program is built on a well-trained <span className="text-cyan-400">Team</span> with a blameless <span className="text-cyan-400">Culture</span>.</li>
          <li>You can't improve what you don't <span className="text-cyan-400">Measure</span> (MTTD & MTTR are key).</li>
          <li>Think beyond just response; plan for business <span className="text-cyan-400">Continuity</span> and have a solid <span className="text-cyan-400">Backup</span> strategy.</li>
          <li>Every incident is a learning opportunity. Use <span className="text-cyan-400">Post-Incident Reviews</span> to create a feedback loop and continuously improve.</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 83 (was 84)
  {
    title: 'Q & A',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-7xl font-bold text-cyan-400">Questions?</h2>
        <p className="mt-6 text-3xl">Thank You</p>
      </div>
    ),
  },
  // SLIDE 84 (was 69)
  {
    title: 'Conclusion',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-5xl font-bold">Stay Vigilant. Stay Informed. Stay Prepared.</h2>
            <p className="mt-6 text-2xl">Effective threat detection is not about a single product, but a holistic strategy that integrates <span className="text-cyan-400">Technology</span>, actionable <span className="text-cyan-400">Intelligence</span>, robust <span className="text-cyan-400">Processes</span>, and skilled <span className="text-cyan-400">People</span>.</p>
        </div>
    )
  },
  // SLIDE 85: References
  {
    title: 'References & Further Reading',
    content: (
      <div className="space-y-4 text-lg">
        <p>The concepts discussed in this presentation are built upon the foundational work of many organizations and researchers. Here are some excellent resources for further learning:</p>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <strong>NIST Cybersecurity Framework:</strong> <span className="text-cyan-400">https://www.nist.gov/cyberframework</span>
          </li>
          <li>
            <strong>MITRE ATT&CK® Framework:</strong> <span className="text-cyan-400">https://attack.mitre.org/</span>
          </li>
          <li>
            <strong>SANS Institute:</strong> A leading provider of security training and research. <span className="text-cyan-400">https://www.sans.org/</span>
          </li>
          <li>
            <strong>OWASP (Open Web Application Security Project):</strong> The authority on web application security. <span className="text-cyan-400">https://owasp.org/</span>
          </li>
           <li>
            <strong>CISA (Cybersecurity and Infrastructure Security Agency):</strong> Provides alerts, best practices, and resources. <span className="text-cyan-400">https://www.cisa.gov/</span>
          </li>
          <li>
            <strong>Vendor Threat Research Blogs:</strong> Companies like CrowdStrike, Mandiant (Google), and Palo Alto Networks publish cutting-edge threat research.
          </li>
        </ul>
      </div>
    ),
  },
];


function App() {
  return (
    <main>
      <Presentation slides={slides} />
    </main>
  );
}

export default App;

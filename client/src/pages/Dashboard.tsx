import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/TopBar';
import HeroBanner from '../components/dashboard/HeroBanner';
import LearningSection from '../components/dashboard/LearningSection';
import ShowcaseSection from '../components/dashboard/ShowcaseSection';
import RightRail from '../components/dashboard/RightRail';

const DashboardNew: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} />
      </div>
      
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onToggleSidebar={() => setCollapsed((c) => !c)} />
        <main className="flex flex-col xl:flex-row flex-1 gap-4 p-3 sm:p-4 md:p-6 overflow-hidden">
          {/* Main content area - Full width on mobile/tablet, 2/3 on desktop */}
          <div className="min-w-0 flex-1 space-y-3 sm:space-y-4 overflow-y-auto">
            <HeroBanner />
            <LearningSection />
            <ShowcaseSection />
          </div>
          
          {/* Right rail - Hidden on mobile/tablet, shown on large desktop */}
          <RightRail />
        </main>
      </div>
    </div>
  );
};

export default DashboardNew;

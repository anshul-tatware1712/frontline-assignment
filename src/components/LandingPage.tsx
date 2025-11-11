import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, Globe } from "lucide-react";
import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import { statsConfig, featuresConfig } from "@/config/landingPageConfig";

interface LandingPageProps {
  onViewCompanies: () => void;
}

const iconMap = {
  building: <Building2 className="h-12 w-12" />,
  users: <Users className="h-12 w-12" />,
  trending: <TrendingUp className="h-12 w-12" />,
  globe: <Globe className="h-12 w-12" />,
};

const featureIconMap = {
  building: <Building2 className="h-8 w-8" />,
  users: <Users className="h-8 w-8" />,
  trending: <TrendingUp className="h-8 w-8" />,
  globe: <Globe className="h-8 w-8" />,
};

export default function LandingPage({ onViewCompanies }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CompanyHub</span>
          </div>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={onViewCompanies}
          >
            View Directory
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing <span className="text-blue-600">Companies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore our comprehensive directory of innovative companies across
            various industries. Find detailed information, filter by your
            preferences, and discover your next opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {statsConfig.map((stat) => (
              <StatsCard
                key={stat.id}
                icon={
                  <div className={stat.iconColor}>
                    {stat.id === 1 && iconMap.building}
                    {stat.id === 2 && iconMap.users}
                    {stat.id === 3 && iconMap.trending}
                  </div>
                }
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresConfig.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={
                  <div className={feature.iconColor}>
                    {feature.id === 1 && featureIconMap.building}
                    {feature.id === 2 && featureIconMap.users}
                    {feature.id === 3 && featureIconMap.trending}
                    {feature.id === 4 && featureIconMap.globe}
                  </div>
                }
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

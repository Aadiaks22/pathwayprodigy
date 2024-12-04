'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Users, ShoppingBag, Wallet, Box, UserCog, Target, TrendingUp, Settings, Building2, Briefcase, Lightbulb } from 'lucide-react'

const JobOpportunities = () => {
    const jobProfiles = [
        { title: "Entrepreneurship", icon: Lightbulb },
        { title: "Product Marketing", icon: ShoppingBag },
        { title: "Wealth Management", icon: Wallet },
        { title: "Digital Transformation", icon: Settings },
        { title: "Retail Banking", icon: Building2 },
        { title: "Supply Chain & Operations", icon: Box },
        { title: "HR & Talent Management", icon: UserCog },
        { title: "Digital Marketing", icon: LineChart },
        { title: "Brand Management", icon: Users },
        { title: "Performance Marketing", icon: Target },
        { title: "Sales & Business Development", icon: TrendingUp },
        { title: "Portfolio Management", icon: Briefcase },
    ]

    const industries = [
        "Banking & Finance",
        "Technology",
        "Healthcare",
        "Manufacturing",
        "Retail",
        "Consulting",
        "E-commerce",
        "Education",
        "Real Estate",
        "Telecommunications",
        "Media & Entertainment",
        "FMCG"
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-orange-600 mb-4 leading-tight">
                        Job opportunities
                    </h2>
                    <p className="text-xl font-bold text-orange-600 mb-4">High-Paid Job Profiles After Graduation & Post-Graduation</p>
                </div>
                <Tabs defaultValue="profiles" className="w-full">
                    <TabsList className="mb-8 border-b w-full justify-start rounded-none bg-transparent space-x-8">
                        <TabsTrigger
                            value="profiles"
                            className="text-lg font-semibold data-[state=active]:border-b-2 data-[state=active]:border-orange-600 rounded-none bg-transparent data-[state=active]:shadow-none"
                        >
                            Job profiles
                        </TabsTrigger>
                        <TabsTrigger
                            value="industries"
                            className="text-lg font-semibold data-[state=active]:border-b-2 data-[state=active]:border-orange-700 rounded-none bg-transparent data-[state=active]:shadow-none"
                        >
                            Industries
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="profiles">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {jobProfiles.map((job, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all duration-300"
                                >
                                    <job.icon className="h-6 w-6 text-orange-600" />
                                    <span className="text-lg font-medium text-gray-800">{job.title}</span>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="industries">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-md transition-all duration-300"
                                >
                                    <Building2 className="h-6 w-6 text-orange-600" />
                                    <span className="text-lg font-medium text-gray-800">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default JobOpportunities


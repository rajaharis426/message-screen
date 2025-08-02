"use client"

import { Avatar, Badge, Button, Typography } from "@mui/material"
interface SidebarProps {
    sidebarOpen: boolean
}

export default function ProfileHeader({ sidebarOpen }: SidebarProps) {
    return (
        <>
            {!sidebarOpen &&
                <div
                    className={`xs:block sm:hidden mt-28 rounded-xl border border-gray-400 ml-6 mr-6 -mb-10`}
                >
                    <div className="text-center mb-8">
                        <div className="relative inline-block mb-6">
                            <Badge
                                variant="secondary"
                                className="absolute -top-4 -right-14 bg-white text-black text-xs px-2 py-1 rounded-full z-10"
                            >
                                Pro Member
                            </Badge>

                            <div className="relative">
                                <img src="/images/avatars/Abbott.jpg" alt="Matthew Marcos" className="w-48 h-48 mx-auto border-2 border-gray-600 rounded-full" />

                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-2 border-white rounded-full flex items-center justify-center">
                                    <div className="text-white text-sm font-bold">△</div>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-xl font-bold mb-1">MATTHEW</h1>
                        <h1 className="text-xl font-bold mb-6">MARCOS</h1>

                        <Button
                            variant="contained"
                            className="border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium bg-transparent"
                        >
                            VIEW PROFILE™
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

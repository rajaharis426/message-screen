"use client"

import { Dialog, DialogContent, DialogActions, Box, Typography, Button } from "@mui/material"
import { Check } from "@mui/icons-material"

interface SubscriptionModalProps {
  open: boolean
  onClose: () => void
}

export default function SubscriptionModal({ open, onClose }: SubscriptionModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      // maxWidth="sm"
      // fullWidth
      PaperProps={{
        className: `w-[100vw] sm:w-[300px] max-w-[90vw] max-h-[80vh] overflow-hidden bg-black border border-white rounded-3xl `,
      }}
    >
      {/* <DialogContent className="overflow-hidden p-0.5 sm:p-1"> */}
      <Box className="">
        <Box className="text-start mb-2 p-6 ">
          <h2 className="text-[24px] leading-[30px] font-bold tracking-[-0.02em] text-[#FFCD1A] font-inter">
            PRO MEMBER
          </h2>
          <p className="text-[32px] leading-[60px] font-bold tracking-[-0.02em] text-white  font-inter">
            $30 for 30 days
          </p>

          <p className="text-sm leading-[18px] font-bold text-white font-inter">
            Elevate your Creative ProFile™
            Become a Pro Member

          </p>

        </Box>
        <Box className="mb-2 ">
          <Box className="flex items-center justify-center bg-yellow-500 w-full h-10  text-black text-center  rounded-mds text-sm font-bold">
            <p className="text-base leading-[16px] font-bold text-black uppercase text-center font-inter flex items-center">
              THE BENEFITS
            </p>
          </Box>

          <Box className="[&>*]:mb-1 p-4">
            {["Featured Priority", "Newsletter", "News page", "Social media posts", "Work reel in spotlight"].map(
              (benefit, index) => (
                <Box key={index} className="flex items-center gap-1">
                  <Box className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center ">
                    <img src="/images/tick-icon.png" />
                    {/* <Check className="w-2 h-2 text-black" /> */}
                  </Box>
                  <p className="text-sm leading-5 font-normal text-white font-inter">
                    {benefit}
                  </p>
                </Box>
              )
            )}


          </Box>
        </Box>
      </Box>



      <DialogActions className="fle flex-col px-2 mb-3">
        <Box className="mb-2">
          <p className="text-sm leading-[18px] font-normal italic text-white font-inter text-start pl-3">
            Great freelancers open & booking or looking for new opportunities.
          </p>
        </Box>
        <button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 rounded-3xl p-3 font-bold text-sm border-2 border-white uppercase font-inter leading-[16px] text-base text-center">
          GET STARTED
        </button>

      </DialogActions>
    </Dialog>
  )
}

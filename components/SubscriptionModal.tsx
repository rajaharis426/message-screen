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
      <Box>
        <Box className="text-start mb-2 p-4">
          <Typography variant="subtitle1" className="text-yellow-500 font-bold mb-0.5 text-lg sm:text-xl">
            PRO MEMBER
          </Typography>
          <Typography variant="h6" className="text-white font-bold mb-1 text-2xl sm:text-2xl">
            $30 for 30 days
          </Typography>
          <Typography variant="body2" className="text-white mb-0.5 text-sm sm:text-sm">
            Elevate your Creative ProFile™
          </Typography>
          <Typography variant="body2" className="text-white text-sm sm:text-sm">
            Become a Pro Member
          </Typography>
        </Box>
        <Box className="mb-2 ">
          <Box className="flex items-center justify-center bg-yellow-500 w-full h-10  text-black text-center  rounded-mds text-sm font-bold">
            <Typography>
              THE BENEFITS
            </Typography>
          </Box>

          <Box className="[&>*]:mb-1 p-4">
            {["Featured Priority", "Newsletter", "News page", "Social media posts", "Work reel in spotlight"].map(
              (benefit, index) => (
                <Box key={index} className="flex items-center gap-1">
                  <Box className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center p-4">
                    <Check className="w-2 h-2 text-black" />
                  </Box>
                  <Typography variant="body2" className="text-white">
                    {benefit}
                  </Typography>
                </Box>
              )
            )}


          </Box>
        </Box>
      </Box>



      <DialogActions className="fle flex-col px-2 pb-2">
        <Box className="mb-2">
          <Typography className="text-white italic text-center font-bold">
            Great freelancers open & booking or looking for new opportunities.
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-3xl py-1 font-bold text-sm"
        >
          GET STARTED
        </Button>
      </DialogActions>
    </Dialog>
  )
}

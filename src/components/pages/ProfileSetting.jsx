"use client"

import { Check, User, X } from "lucide-react"
// Import necessary dependencies
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Main ProfileSetting component
const ProfileSetting = () => {
  // Initialize navigation hook
  const navigate = useNavigate()
  
  // State management
  const [isLoading, setIsLoading] = useState(false)
  const [bioLength, setBioLength] = useState(0)
  const [formData, setFormData] = useState({
    username: "sfcollab",
    profileUrl: "https://sfcollab.com/",
    bio: "",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com"
  })

  // Handle bio text changes and update character count
  const handleBioChange = (e) => {
    setBioLength(e.target.value.length)
    setFormData(prev => ({
      ...prev,
      bio: e.target.value
    }))
  }

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Replace with your API endpoint
      // const response = await fetch('/api/profile', {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // })

      // if (!response.ok) {
      //   throw new Error('Failed to update profile')
      // }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success message
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Failed to update profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Profile Details Header */}
          <div className="border-b pb-4  ">
            <h2 className="text-2xl font-medium mb-2">Profile Details</h2>
            <p className="text-[#C4C4C4]">You can change your profile details here seamlessly.</p>
          </div>

          {/* Profile Picture Section */}
          <div className=" flex w-full justify-between border-b pb-4">
            <div className="w-[50%]">
            <h3 className="text-xl font-medium">Profile Picture</h3>
            <p className="text-[#C4C4C4]">This is where people will see your actual face</p>
            </div>
            <div className="flex gap-4 items-center w-[50%]">
              <div className="w-24 h-24 rounded-full overflow-hidden text-center py-4 border border-white/10">
                <img src="/placeholder.svg?height=96&width=96" alt="Profile picture" width={96} height={96} />
              </div>
              <div className="flex flex-col gap-2">
                <button type="button" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                  Change Picture
                </button>
                <button type="button" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
                  Delete Picture
                </button>
              </div>
            </div>
          </div>

          {/* Public Profile Section */}
          <div className="flex justify-between border-b pb-4">
            <div className="w-[50%] space-y-2">
            <h3 className="text-xl font-medium">Public Profile</h3>
            <p className="text-[#C4C4C4]">This is the main profile that will be visible for everyone. This is the main profile that will be visible for everyone.</p>
            </div>
            <div className=" flex flex-col gap-4 w-[50%]">
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2"><User className="w-4 h-4" /></span>
                <input 
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="min-w-[500px] bg-[#232323] rounded-full p-2 pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <input 
                type="text"
                name="profileUrl"
                value={formData.profileUrl}
                onChange={handleChange}
                className="min-w-[500px] bg-[#232323] rounded-full p-2"
              />
            </div>
            </div>
          
          </div>

          {/* Bio Description Section */}
          <div className="space-y-4 flex justify-between border-b pb-4">
            <div className="w-[50%]">
            <h3 className="text-xl font-medium">Bio Description</h3>
            <p className="text-[#C4C4C4]">This will be your main story. Keep it very long.</p>
            </div>
            <div className="space-y-2 w-[50%]">
              <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleBioChange}
                maxLength={350}
                rows={10}
                placeholder="Enter your bio here"
                className="w-full bg-[#232323] rounded-md p-2 min-h-[100px]"
              />
              <div className="text-right text-sm text-[#C4C4C4]">{bioLength}/350</div>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="flex justify-between border-b pb-4">
            <div className="w-[50%]">
            <h3 className="text-xl font-medium">Social Media Links</h3>
            <p className="text-[#C4C4C4]">Links for your social media.</p>
            </div>
            <div className="space-y-2 w-[50%]">
              {/* Facebook Input */}
              <div className="flex">
                <div className="bg-[#232323] rounded-l-md border-r border-white/10  p-2 whitespace-nowrap">facebook.com/</div>
                <input 
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="flex-1 bg-[#232323] rounded-r-md p-2"
                />
              </div>
              {/* Twitter Input */}
              <div className="flex">
                <div className="bg-[#232323] rounded-l-md border-r border-white/10 p-2 whitespace-nowrap">twitter.com/</div>
                <input 
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="flex-1 bg-[#232323] rounded-r-md p-2"
                />
              </div>
              {/* LinkedIn Input */}
              <div className="flex ">
                <div className="bg-[#232323] rounded-l-md border-r border-white/10 p-2 whitespace-nowrap">linkedin.com/</div>
                <input 
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="flex-1 bg-[#232323] rounded-r-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="bg-[#232323] hover:bg-white/10 text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2"
            >
              Cancel <span><X className="w-4 h-4" /></span>
            </button>
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-full transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? "Saving..." : "Save Settings"} <span><Check className="w-4 h-4" /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetting

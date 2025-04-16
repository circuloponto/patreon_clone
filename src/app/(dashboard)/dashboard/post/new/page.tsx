'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, Info } from 'lucide-react';

// Mock membership tiers for access level selection
const MEMBERSHIP_TIERS = [
  { id: 'public', name: 'Public', description: 'Visible to everyone, including non-members' },
  { id: 'supporter', name: 'Supporter', description: 'Only visible to Supporter tier ($5) and above' },
  { id: 'enthusiast', name: 'Art Enthusiast', description: 'Only visible to Art Enthusiast tier ($10) and above' },
  { id: 'student', name: 'Art Student', description: 'Only visible to Art Student tier ($25)' },
];

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    accessLevel: 'public',
    featuredImage: null,
    isDraft: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, featuredImage: file }));
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would upload the image and submit the form data to your API
      console.log('Submitting post:', formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to dashboard (in a real app)
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error creating post:', error);
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center text-white hover:text-gray-300 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold">Create New Post</h1>
          </div>
        </div>
      </header>
      
      {/* Form */}
      <main className="container mx-auto px-6 max-w-4xl py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter a compelling title..."
            />
          </div>
          
          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Featured Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              {previewImage ? (
                <div className="space-y-1 text-center">
                  <div className="flex flex-col items-center">
                    <img src={previewImage} alt="Preview" className="h-40 object-cover mb-3" />
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewImage(null);
                        setFormData(prev => ({ ...prev, featuredImage: null }));
                      }}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Remove image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-700">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Post Content
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={10}
              value={formData.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your post content here..."
            ></textarea>
          </div>
          
          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="A short summary of your post (optional)..."
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              If left empty, an excerpt will be automatically generated from your content.
            </p>
          </div>
          
          {/* Access Level */}
          <div>
            <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700 mb-1">
              Access Level
            </label>
            <select
              id="accessLevel"
              name="accessLevel"
              value={formData.accessLevel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {MEMBERSHIP_TIERS.map(tier => (
                <option key={tier.id} value={tier.id}>
                  {tier.name}
                </option>
              ))}
            </select>
            <div className="mt-2 flex items-start">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-gray-400" />
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {MEMBERSHIP_TIERS.find(tier => tier.id === formData.accessLevel)?.description}
              </p>
            </div>
          </div>
          
          {/* Save as Draft */}
          <div className="flex items-center">
            <input
              id="isDraft"
              name="isDraft"
              type="checkbox"
              checked={formData.isDraft}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <label htmlFor="isDraft" className="ml-2 block text-sm text-gray-700">
              Save as draft (won't be published immediately)
            </label>
          </div>
          
          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Link 
              href="/dashboard" 
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : formData.isDraft ? 'Save Draft' : 'Publish Post'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

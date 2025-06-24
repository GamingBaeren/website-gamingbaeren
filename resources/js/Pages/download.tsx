import React from 'react';
import { DownloadCloud, ChevronRight, Download as DownloadIcon } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const DownloadPage = () => {
  return (
    <AuthenticatedLayout>
    <Head title='Launcher Download'></Head>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <DownloadCloud className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Download Now
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Get started with our application today. Choose the version that best suits your needs.
          </p>
        </div>

        {/* Download options */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Free Version */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Free Version</CardTitle>
              <CardDescription>Perfect for personal use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    Basic features included
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    Community support
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    Regular updates
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Free
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Requirements */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-white">Operating System</CardTitle>
                <CardDescription>
                  Windows 10/11
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-white">Memory</CardTitle>
                <CardDescription>
                  8 GB RAM minimum
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-white">Storage</CardTitle>
                <CardDescription>
                  depends on modpack 2 GB available space
  
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
    
    </AuthenticatedLayout>
  );
};

export default DownloadPage;
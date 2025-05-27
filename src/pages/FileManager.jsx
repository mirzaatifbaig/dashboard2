import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter,
  Grid,
  List,
  Download,
  Trash2,
  Edit3,
  Share,
  Eye,
  MoreHorizontal,
  Folder,
  Image,
  Music,
  Video,
  Archive,
  File,
  Calendar,
  User
} from 'lucide-react';

export default function FileManager() {
  const files = [
    {
      id: 1,
      name: 'Project Proposal.pdf',
      type: 'pdf',
      size: '2.4 MB',
      modified: '2024-11-20',
      owner: 'Alice Johnson',
      shared: true,
      category: 'Documents'
    },
    {
      id: 2,
      name: 'Dashboard Screenshot.png',
      type: 'image',
      size: '856 KB',
      modified: '2024-11-19',
      owner: 'Bob Smith',
      shared: false,
      category: 'Images'
    },
    {
      id: 3,
      name: 'Meeting Recording.mp4',
      type: 'video',
      size: '45.2 MB',
      modified: '2024-11-18',
      owner: 'Carol Brown',
      shared: true,
      category: 'Videos'
    },
    {
      id: 4,
      name: 'Financial Report Q3.xlsx',
      type: 'spreadsheet',
      size: '1.8 MB',
      modified: '2024-11-17',
      owner: 'David Wilson',
      shared: false,
      category: 'Documents'
    },
    {
      id: 5,
      name: 'Team Photo.jpg',
      type: 'image',
      size: '3.2 MB',
      modified: '2024-11-16',
      owner: 'Emma Davis',
      shared: true,
      category: 'Images'
    },
    {
      id: 6,
      name: 'Code Archive.zip',
      type: 'archive',
      size: '12.5 MB',
      modified: '2024-11-15',
      owner: 'Frank Miller',
      shared: false,
      category: 'Archives'
    },
    {
      id: 7,
      name: 'Presentation Draft.pptx',
      type: 'presentation',
      size: '5.7 MB',
      modified: '2024-11-14',
      owner: 'Grace Lee',
      shared: true,
      category: 'Documents'
    },
    {
      id: 8,
      name: 'Background Music.mp3',
      type: 'audio',
      size: '4.1 MB',
      modified: '2024-11-13',
      owner: 'Henry Chang',
      shared: false,
      category: 'Audio'
    }
  ];

  const folders = [
    { name: 'Projects', files: 24, modified: '2024-11-20' },
    { name: 'Documents', files: 18, modified: '2024-11-19' },
    { name: 'Images', files: 42, modified: '2024-11-18' },
    { name: 'Archives', files: 8, modified: '2024-11-17' }
  ];

  const recentFiles = files.slice(0, 5);
  const sharedFiles = files.filter(file => file.shared);

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
      case 'doc':
      case 'docx':
      case 'txt':
      case 'spreadsheet':
      case 'presentation':
        return FileText;
      case 'image':
        return Image;
      case 'video':
        return Video;
      case 'audio':
        return Music;
      case 'archive':
        return Archive;
      default:
        return File;
    }
  };

  const getFileColor = (type) => {
    switch (type) {
      case 'pdf': return 'text-red-500';
      case 'image': return 'text-blue-500';
      case 'video': return 'text-purple-500';
      case 'audio': return 'text-green-500';
      case 'archive': return 'text-orange-500';
      case 'spreadsheet': return 'text-emerald-500';
      case 'presentation': return 'text-yellow-600';
      default: return 'text-gray-500';
    }
  };

  const storageUsed = 68.4;
  const storageLimit = 100;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <FileText className="h-8 w-8" />
            File Manager
          </h1>
          <p className="text-muted-foreground">
            Organize, share, and manage your files and documents
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Storage Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Storage Usage</h3>
                <p className="text-sm text-muted-foreground">
                  {storageUsed} GB of {storageLimit} GB used
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all"
                    style={{ width: `${(storageUsed / storageLimit) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {(storageLimit - storageUsed).toFixed(1)} GB available
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold">{files.length}</p>
                <p className="text-sm text-muted-foreground">Total Files</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-2xl font-bold">{folders.length}</p>
                <p className="text-sm text-muted-foreground">Folders</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files and folders..."
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <List className="h-4 w-4 mr-2" />
            List View
          </Button>
          <Button variant="ghost" size="sm">
            <Grid className="h-4 w-4 mr-2" />
            Grid View
          </Button>
        </div>
      </div>

      {/* File Manager Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
        </TabsList>

        {/* All Files Tab */}
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Files</CardTitle>
              <CardDescription>Complete list of your files and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Shared</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <TableRow key={file.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <FileIcon className={`h-5 w-5 ${getFileColor(file.type)}`} />
                            <div>
                              <div className="font-medium">{file.name}</div>
                              <div className="text-sm text-muted-foreground">{file.category}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{file.size}</TableCell>
                        <TableCell className="text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(file.modified).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {file.owner}
                          </div>
                        </TableCell>
                        <TableCell>
                          {file.shared ? (
                            <Badge variant="default">Shared</Badge>
                          ) : (
                            <Badge variant="outline">Private</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recent Files Tab */}
        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recent Files</CardTitle>
              <CardDescription>Files you've accessed or modified recently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recentFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <Card key={file.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <FileIcon className={`h-8 w-8 ${getFileColor(file.type)}`} />
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Share className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-medium text-sm leading-tight">{file.name}</h3>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{file.size}</span>
                            <span>{new Date(file.modified).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">{file.category}</Badge>
                            {file.shared && (
                              <Badge variant="default" className="text-xs">Shared</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Shared Files Tab */}
        <TabsContent value="shared">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="h-5 w-5" />
                Shared Files
              </CardTitle>
              <CardDescription>Files you've shared with team members or that have been shared with you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sharedFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <FileIcon className={`h-6 w-6 ${getFileColor(file.type)}`} />
                        <div>
                          <h3 className="font-medium">{file.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Shared by {file.owner} • {file.size} • {new Date(file.modified).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">Shared</Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Folders Tab */}
        <TabsContent value="folders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Folders
              </CardTitle>
              <CardDescription>Organize your files into folders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {folders.map((folder) => (
                  <Card key={folder.name} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Folder className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">{folder.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {folder.files} files
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Modified {new Date(folder.modified).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Add New Folder Card */}
                <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 border-dashed border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">New Folder</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a new folder
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

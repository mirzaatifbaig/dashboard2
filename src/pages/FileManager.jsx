import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Archive,
  Calendar,
  Download,
  Eye,
  File,
  FileText,
  Filter,
  Folder,
  Grid,
  Image,
  List,
  MoreHorizontal,
  Music,
  Search,
  Share,
  Upload,
  User,
  Video,
} from "lucide-react";
import {files, folders} from "@/data/mock.js";

export default function FileManager() {
  const recentFiles = files.slice(0, 5);
  const sharedFiles = files.filter((file) => file.shared);

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
      case "doc":
      case "docx":
      case "txt":
      case "spreadsheet":
      case "presentation":
        return FileText;
      case "image":
        return Image;
      case "video":
        return Video;
      case "audio":
        return Music;
      case "archive":
        return Archive;
      default:
        return File;
    }
  };

  const getFileColor = (type) => {
    switch (type) {
      case "pdf":
        return "text-red-500";
      case "image":
        return "text-blue-500";
      case "video":
        return "text-purple-500";
      case "audio":
        return "text-green-500";
      case "archive":
        return "text-orange-500";
      case "spreadsheet":
        return "text-emerald-500";
      case "presentation":
        return "text-yellow-600";
      default:
        return "text-gray-500";
    }
  };

  const storageUsed = 68.4;
  const storageLimit = 100;

  return (
    <div className="p-6 space-y-6">
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

      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search files and folders..." className="pl-10" />
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

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Files</CardTitle>
              <CardDescription>
                Complete list of your files and documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="hidden md:table w-full">
                {" "}
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Shared</TableHead>
                    <TableHead className="flex flex-col items-center text pt-2 w-[100px]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <TableRow key={file.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <FileIcon
                              className={`h-5 w-5 ${getFileColor(file.type)}`}
                            />
                            <div>
                              <div className="font-medium">{file.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {file.category}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {file.size}
                        </TableCell>
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
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {files.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div
                      key={file.id}
                      className="p-4 border rounded-lg shadow-sm bg-white"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <FileIcon
                          className={`h-5 w-5 ${getFileColor(file.type)}`}
                        />
                        <div>
                          <div className="font-medium text-base">
                            {file.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {file.category}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground mb-1">
                        {file.size}
                      </div>
                      <div className="text-sm text-muted-foreground mb-1 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(file.modified).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2 flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {file.owner}
                      </div>

                      <div className="mb-3">
                        {file.shared ? (
                          <Badge variant="default">Shared</Badge>
                        ) : (
                          <Badge variant="outline">Private</Badge>
                        )}
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recent Files</CardTitle>
              <CardDescription>
                Files you've accessed or modified recently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recentFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <Card
                      key={file.id}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <FileIcon
                            className={`h-8 w-8 ${getFileColor(file.type)}`}
                          />
                          <div className="flex items-center space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <Share className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium text-sm leading-tight">
                            {file.name}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{file.size}</span>
                            <span>
                              {new Date(file.modified).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {file.category}
                            </Badge>
                            {file.shared && (
                              <Badge variant="default" className="text-xs">
                                Shared
                              </Badge>
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

        <TabsContent value="shared">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="h-5 w-5" />
                Shared Files
              </CardTitle>
              <CardDescription>
                Files you've shared with team members or that have been shared
                with you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sharedFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <FileIcon
                          className={`h-6 w-6 ${getFileColor(file.type)}`}
                        />
                        <div>
                          <h3 className="font-medium">{file.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Shared by {file.owner} • {file.size} •{" "}
                            {new Date(file.modified).toLocaleDateString()}
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

        <TabsContent value="folders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Folders
              </CardTitle>
              <CardDescription>
                Organize your files into folders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {folders.map((folder) => (
                  <Card
                    key={folder.name}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <Folder className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">{folder.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {folder.files} files
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Modified{" "}
                        {new Date(folder.modified).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}

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

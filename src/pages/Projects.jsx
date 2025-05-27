import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  FolderOpen,
  GitBranch,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Star,
  Users,
} from "lucide-react";
import { projects } from "@/data/mock.js";

export default function Projects() {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return CheckCircle2;
      case "In Progress":
        return Play;
      case "Review":
        return Clock;
      case "Planning":
        return GitBranch;
      case "On Hold":
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "In Progress":
        return "text-blue-600 bg-blue-100";
      case "Review":
        return "text-yellow-600 bg-yellow-100";
      case "Planning":
        return "text-purple-600 bg-purple-100";
      case "On Hold":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const activeProjects = projects.filter((p) => p.status === "In Progress");
  const completedProjects = projects.filter((p) => p.status === "Completed");
  const starredProjects = projects.filter((p) => p.starred);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-1 md:space-y-0">
        <div>
          <h1 className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-1">
            <FolderOpen className="h-4 w-4 md:h-5 md:w-5" />
            Projects
          </h1>
          <p className="text-muted-foreground text-xs">
            Manage and track your project progress
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" className="h-6">
            <Filter className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />
            Filter
          </Button>
          <Button className="flex items-center gap-1 h-6">
            <Plus className="h-2.5 w-2.5 md:h-3 md:w-3" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid gap-1 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardContent className="p-1 md:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Total Projects
                </p>
                <p className="text-sm md:text-base font-bold">
                  {projects.length}
                </p>
              </div>
              <div className="h-4 w-4 md:h-5 md:w-5 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FolderOpen className="h-2 w-2 md:h-2.5 md:w-2.5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-1 md:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Active
                </p>
                <p className="text-sm md:text-base font-bold">
                  {activeProjects.length}
                </p>
              </div>
              <div className="h-4 w-4 md:h-5 md:w-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="h-2 w-2 md:h-2.5 md:w-2.5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-1 md:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Completed
                </p>
                <p className="text-sm md:text-base font-bold">
                  {completedProjects.length}
                </p>
              </div>
              <div className="h-4 w-4 md:h-5 md:w-5 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-2 w-2 md:h-2.5 md:w-2.5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-1 md:p-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Team Members
                </p>
                <p className="text-sm md:text-base font-bold">24</p>
              </div>
              <div className="h-4 w-4 md:h-5 md:w-5 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-2 w-2 md:h-2.5 md:w-2.5 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-1">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2 top-2 h-2.5 w-2.5 md:h-3 md:w-3 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-7 h-6 text-xs md:text-sm"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-1 md:space-y-1">
        <TabsList className="grid w-full grid-cols-4 gap-0.5">
          <TabsTrigger
            value="all"
            className="text-xs px-1 py-1 md:px-2 md:py-1.5"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="text-xs px-1 py-1 md:px-2 md:py-1.5"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="starred"
            className="text-xs px-1 py-1 md:px-2 md:py-1.5"
          >
            Starred
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="text-xs px-1 py-1 md:px-2 md:py-1.5"
          >
            Done
          </TabsTrigger>
        </TabsList>

        <TabsContent className={"border-2 "} value="all">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">All Projects</CardTitle>
              <CardDescription className="text-xs">
                Complete overview of your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table className="hidden md:table w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Project</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs">Priority</TableHead>
                    <TableHead className="text-xs">Progress</TableHead>
                    <TableHead className="text-xs">Team</TableHead>
                    <TableHead className="text-xs">Due Date</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {projects.map((project) => {
                    const StatusIcon = getStatusIcon(project.status);
                    return (
                      <TableRow key={project.id} className="hover:bg-muted/50">
                        <TableCell className="py-1">
                          <div className="flex items-start space-x-1">
                            {project.starred && (
                              <Star className="h-2 w-2 text-yellow-500 fill-current mt-0.5 flex-shrink-0" />
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-xs truncate">
                                {project.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {project.description}
                              </div>
                              <div className="mt-1 flex flex-wrap gap-1">
                                <Badge
                                  variant="outline"
                                  className={`${getStatusColor(project.status)} text-xs px-1 py-0.5`}
                                >
                                  <StatusIcon className="h-1.5 w-1.5 mr-1" />
                                  {project.status}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={`${getPriorityColor(project.priority)} text-xs px-1 py-0.5`}
                                >
                                  {project.priority}
                                </Badge>
                              </div>
                              <div className="mt-1 text-xs text-muted-foreground">
                                {project.progress}% •{" "}
                                {new Date(project.dueDate).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getStatusColor(project.status)}
                          >
                            <StatusIcon className="h-2 w-2 mr-1" />
                            {project.status}
                          </Badge>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getPriorityColor(project.priority)}
                          >
                            {project.priority}
                          </Badge>
                        </TableCell>

                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>{project.progress}%</span>
                              <span className="text-muted-foreground">
                                {project.tasks.completed}/{project.tasks.total}
                              </span>
                            </div>
                            <Progress
                              value={project.progress}
                              className="h-1"
                            />
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex -space-x-1">
                            {project.team.slice(0, 3).map((member, index) => (
                              <Avatar
                                key={index}
                                className="h-5 w-5 border-2 border-background"
                              >
                                <AvatarImage
                                  src={member.avatar}
                                  alt={member.name}
                                />
                                <AvatarFallback className="text-xs">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {project.team.length > 3 && (
                              <div className="h-5 w-5 bg-muted border-2 border-background rounded-full flex items-center justify-center text-xs font-medium">
                                +{project.team.length - 3}
                              </div>
                            )}
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-2 w-2 mr-1" />
                            {new Date(project.dueDate).toLocaleDateString()}
                          </div>
                        </TableCell>

                        <TableCell className="py-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0"
                          >
                            <MoreHorizontal className="h-2 w-2" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {projects.map((project) => {
                  const StatusIcon = getStatusIcon(project.status);
                  return (
                    <div
                      key={project.id}
                      className="p-4 border rounded-lg shadow-sm bg-white"
                    >
                      <div className="flex items-start space-x-2 mb-2">
                        {project.starred && (
                          <Star className="h-3 w-3 text-yellow-500 fill-current mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">
                            {project.name}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-2">
                            {project.description}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        <Badge
                          variant="outline"
                          className={`${getStatusColor(project.status)} text-xs px-1 py-0.5`}
                        >
                          <StatusIcon className="h-2 w-2 mr-1" />
                          {project.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`${getPriorityColor(project.priority)} text-xs px-1 py-0.5`}
                        >
                          {project.priority}
                        </Badge>
                      </div>

                      <div className="text-xs text-muted-foreground mb-2">
                        {project.progress}% complete •{" "}
                        {new Date(project.dueDate).toLocaleDateString()}
                      </div>

                      <div className="space-y-1 mb-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>{project.progress}%</span>
                          <span className="text-muted-foreground">
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                        </div>
                        <Progress value={project.progress} className="h-1" />
                      </div>

                      <div className="flex -space-x-1">
                        {project.team.slice(0, 3).map((member, index) => (
                          <Avatar
                            key={index}
                            className="h-5 w-5 border-2 border-background"
                          >
                            <AvatarImage
                              src={member.avatar}
                              alt={member.name}
                            />
                            <AvatarFallback className="text-xs">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {project.team.length > 3 && (
                          <div className="h-5 w-5 bg-muted border-2 border-background rounded-full flex items-center justify-center text-xs font-medium">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <div className="grid gap-1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {activeProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{project.name}</CardTitle>
                    {project.starred && (
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <CardDescription className="text-xs">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={getStatusColor(project.status)}
                    >
                      {project.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getPriorityColor(project.priority)}
                    >
                      {project.priority}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      {project.team.slice(0, 3).map((member, index) => (
                        <Avatar
                          key={index}
                          className="h-4 w-4 md:h-5 md:w-5 border-2 border-background"
                        >
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-2 w-2 mr-1" />
                      {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="starred">
          <div className="grid gap-1 md:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {starredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-md transition-shadow border-yellow-200"
              >
                <CardHeader className="pb-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{project.name}</CardTitle>
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  </div>
                  <CardDescription className="text-xs">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={getStatusColor(project.status)}
                    >
                      {project.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getPriorityColor(project.priority)}
                    >
                      {project.priority}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      {project.team.slice(0, 3).map((member, index) => (
                        <Avatar
                          key={index}
                          className="h-4 w-4 md:h-5 md:w-5 border-2 border-background"
                        >
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-2 w-2 mr-1" />
                      {new Date(project.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Completed Projects</span>
              </CardTitle>
              <CardDescription className="text-xs">
                Successfully finished projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {completedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-1 border rounded-lg bg-green-50/50 space-y-1 md:space-y-0"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm">{project.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:text-right space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-2 w-2 mr-1" />
                        Completed{" "}
                        {new Date(project.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex -space-x-1 justify-end">
                        {project.team.slice(0, 3).map((member, index) => (
                          <Avatar
                            key={index}
                            className="h-4 w-4 md:h-5 md:w-5 border-2 border-background"
                          >
                            <AvatarImage
                              src={member.avatar}
                              alt={member.name}
                            />
                            <AvatarFallback className="text-xs">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

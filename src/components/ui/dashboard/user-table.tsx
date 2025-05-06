import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface User {
  name: string;
  email: string;
  joined: string;
}

interface RecentUsersProps {
  users: User[];
}

const RecentUsers = ({ users }: RecentUsersProps) => {
  return (
    <Card className="h-full w-full shadow-lg rounded-xl border border-gray-100 overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
      <div className="flex justify-between items-center">
        <CardTitle className="text-lg font-bold">Recent Users</CardTitle>
        <span className="text-indigo-100 text-xs">{users.length} users</span>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <Table className="w-full">
        <TableHeader className="bg-gray-50">
          <TableRow className="border-b border-gray-200">
            <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</TableHead>
            <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</TableHead>
            <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200">
          {users.slice(0, 4).map((user, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <TableCell className="py-3 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-medium">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-3 px-4 text-sm text-gray-600 truncate max-w-[120px]">
                {user.email}
              </TableCell>
              <TableCell className="py-3 px-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  {user.joined}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
    {users.length > 4 && (
      <CardFooter className="bg-gray-50 px-4 py-2 border-t border-gray-200">
        <p className="text-center text-xs text-gray-500">
          Showing 4 of {users.length} users
        </p>
      </CardFooter>
    )}
  </Card>
  );
};

export default RecentUsers;

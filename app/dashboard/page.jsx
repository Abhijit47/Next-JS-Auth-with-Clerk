import { UserProfile } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <div>
      <UserProfile path='/dashboard' routing='virtual' />
    </div>
  );
}

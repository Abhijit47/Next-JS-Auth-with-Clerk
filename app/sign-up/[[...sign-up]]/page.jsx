import { SignUp } from '@clerk/nextjs';
import {
  dark,
  neobrutalism,
  shadesOfPurple,
  unstable_createTheme,
} from '@clerk/themes';

export default function SignUpPage() {
  return (
    <div>
      <SignUp
        appearance={{
          // baseTheme: dark,
          // baseTheme: [neobrutalism],
          // baseTheme: [shadesOfPurple],
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm',
          },
          layout: {
            socialButtonsPlacement: 'bottom',
            socialButtonsVariant: 'iconButton',
            shimmer: true,
            logoPlacement: 'inside',
            logoImageUrl: '/next.svg',
          },
        }}
        afterSignUpUrl='/sign-in'
        path='/sign-up'
        routing='path'
      />
    </div>
  );
}

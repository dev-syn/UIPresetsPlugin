import { NavItems } from './NavItems';

type UIPresetsBG = Frame & {
	SettingsBtn: ImageButton;
	Content: NavItems;
	Title: TextLabel & {
		UICorner: UICorner;
	};
	NavbarBG: Frame & {
		Navbar: ScrollingFrame & {
			ComponentsBtn: TextButton & {
				UITextSizeConstraint: UITextSizeConstraint;
			};
			PresetsBtn: TextButton & {
				UITextSizeConstraint: UITextSizeConstraint;
			};
			UIListLayout: UIListLayout;
		};
	};
};

export { UIPresetsBG }
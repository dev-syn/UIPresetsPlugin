export type UIPresetsBG = Frame & {
	SettingsBtn: ImageButton & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
	};
	Content: Frame & {
		["NavItem-Main"]: Frame & {
			Content: Frame;
		};
	};
	Title: TextLabel & {
		UICorner: UICorner;
		UITextSizeConstraint: UITextSizeConstraint;
	};
	NavbarBG: Frame & {
		Navbar: ScrollingFrame & {
			ComponentsBtn: TextButton & {
				UITextSizeConstraint: UITextSizeConstraint;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				UIPadding: UIPadding;
			};
			PresetsBtn: TextButton & {
				UITextSizeConstraint: UITextSizeConstraint;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				UIPadding: UIPadding;
			};
			UIListLayout: UIListLayout;
		};
	};
}

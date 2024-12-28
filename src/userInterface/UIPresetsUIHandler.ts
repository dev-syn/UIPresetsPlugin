import { t } from '@rbxts/t';
import { NavItems } from 'types/UI/instances/NavItems';
import INavItems from 't/UI/instances/NavItems';
import { UIPresetsScript } from 'utils/commonPaths';
import type { UIPresetsBG } from 'models/UIPresetsBG.type';
import { Button } from '@rbxts/uipresets/out/components/ContextMenu';
import Navbar from '@rbxts/uipresets/out/components/Navbar';

type NavbarBG = Frame & {
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

const INavbarBG = t.intersection(t.instanceIsA("Frame"),
	t.children({
		Navbar: t.intersection(t.instanceIsA("ScrollingFrame"),t.children({
			ComponentsBtn: t.instanceIsA("TextButton"),
			PresetsBtn: t.instanceIsA("TextButton"),
			UIListLayout: t.instanceIsA("UIListLayout")
		}))
	})
);

const IUIPresetsBG = t.intersection(t.instanceIsA("Frame"),t.children({
	SettingsBtn: t.instanceIsA("ImageButton"),
	Content: INavItems,
	Title: t.instanceIsA("TextLabel"),
	NavbarBG: INavbarBG,
}));

class UIPresetsUIHandler {

	static UIPresetsBG: UIPresetsBG = UIPresetsScript.models.UIPresetsBG;

	private static _dockWidget: DockWidgetPluginGui;
	// private navBar: Navbar<ScrollingFrame> = new Navbar()
	static Init(dockWidget: DockWidgetPluginGui) {
		this._dockWidget = dockWidget;
		
		this.UIPresetsBG.Parent = dockWidget;
	}

}

export { UIPresetsUIHandler, UIPresetsBG };
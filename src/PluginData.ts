import Component from '@rbxts/uipresets/out/components';
import Preset from '@rbxts/uipresets/out/presets';

type UUID = string;

class PluginData {
    Components: Map<UUID,Component> = new Map();
    Presets: Map<UUID,Preset> = new Map();

    constructor() {
        // Load the components and presets that were serialized
        // const serializedComponents: plugin.GetSetting('Components')

        
    }
}
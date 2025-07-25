# Stable Diffusion WebUI UX Forge
A bespoke, highly adaptable, blazing fast user interface for Stable Diffusion, engineered for unmatched user experience and performance.

Stable Diffusion WebUI UX Forge implements backend optimizations to enhance the UX extension. It removes the "Extra Networks" templates served from the backend and replaces the legacy file-based metadata system (file.img + file.json) with a modern SQLite database. This upgrade enables efficient indexing, searching, and fetching for all Extra Networks – including Checkpoints, LoRAs, Textual Inversions, and Hypernetworks

[💖 Your Support Makes a Difference! 💖](https://buymeacoffee.com/dayanbayah)

![](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-flux.png)

## Features Overview
- **Mobile Responsive Design**: Optimal display and usability across various devices.
- **Versatile Micro-Template Engine**: Leverage for enhanced functionality through other extensions.
- **Customizable Theme Styles**: User-friendly interface for theme customization.
- **Styles Manager**: Versatile database-driven styles management.
- **Image Browser**: High-performance database-powered image navigation.
- **Civitai Images**: Ultra-fast virtualized browser for Civitai images.
- **Civitai Models**: Ultra-fast virtualized browser for Civitai models.
- **Built-in Console Log**: Debugging capabilities for developers.
- **Production and Development Modes**: Dynamically compile the web UI UX using Vite directly from the interface.
- **Ignore Overrides Option**: Flexibility to maintain original settings when necessary.
- **Enhanced Usability for Sliders**: Input range sliders support tick marks for improved interaction.
- **Toggle Input Modes**: Switch between slider and numeric input modes for a compact interface.
- **Compatible with Gradio 3 and 4**: Works seamlessly with both Gradio 3 and Gradio 4 frameworks.

### Seamless UI Integration with Extensions
- **Infinite Image Browsing Extension**
- **Deforum Extension**
- **Prompt-All-In-One Extension**
- **Aspect-Ratio-Helper Extension**

## Optimizations
- **Redundant Checkpoints & Extra Networks**: Removed redundant Checkpoints and Extra Networks (Textual Inversion, LoRA, Hypernetworks) from txt2img/img2img tabs. → Implemented single-instance infinite scroll to progressively load optimized assets + metadata from SQLite DB.
- **Inline Event Listeners**: Eradicating inline event listeners from "Extra Networks" cards and action buttons.
- **Event Delegation Pattern**: Applying an event delegation pattern to further streamline the code by consolidating event handling for "Extra Networks" cards and action buttons.
- **Optimized Stylesheets**: Enhanced visual coherence by substituting all default Gradio stylesheets in the DOM with an optimized version.
- **Inline Styles & Svelte Classes**: Improved efficiency by eliminating unnecessary inline styles and Svelte classes.
- **Database-Powered**: SQLite implementation enables rapid indexing/searching across: Extra Networks, Image Browser and Styles Manager.
- **Virtualized Grid**: Dynamic virtualized grid with memory/DOM efficiency for: Checkpoints, Textual Inversions, LoRA, Hypernetworks, Image Browser, Styles Manager, Civitai Images & Models.

### Performance Comparison: UI vs UX
| Core Metrics    | SD web UI  | SD web UI UX | Δ (%)      | Key Improvements |
|-----------------|-----------:|-------------:|-----------:|:-----------------|
| **JS Heap**     | 96,945,380 | 55,048,600   | **-43.2%** | **Memory Efficiency**: 43% ↓ JS heap memory |
| **Documents**   | 109        | 134          | **+22.9%** | **Resource Management**: Optimized overhead |
| **Nodes**       | 53,895     | 41,542       | **-22.9%** | **DOM Efficiency**: 23% ↓ nodes despite 23% ↑ documents |
| **Listeners**   | 8,195      | 4,178        | **-49.0%** | **Event Handling**: 49% ↓ listeners |

| **Visual Comparison** | |
|---|---|
| ![SD web UI](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-insights.png) | ![SD web UI UX](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-ux-insights.png) |
| *Automatic1111 - Stable Diffusion web UI* | *Anapnoe - Stable Diffusion web UI UX* |

### Performance Comparison: Forge vs UX Forge
| Core Metrics    | SD web UI Forge  | SD web UI UX Forge | Δ (%)       | Key Improvements |
|-----------------|-----------------:|-------------------:|------------:|:-----------------|
| **JS Heap**     | 56,121,196       | 45,049,884         | **-19.7%**  | **Memory Efficiency**: 19% ↓ JS heap memory |
| **Documents**   | 21               | 111                | **+428.6%** | **Resource Management**: Optimized overhead |
| **Nodes**       | 46,943           | 43,651             | **-7.0%**   | **DOM Efficiency**: 7% ↓ nodes despite 428% ↑ documents |
| **Listeners**   | 10,562           | 7,495              | **-29.0%**  | **Event Handling**: 29% ↓ listeners |

| **Visual Comparison** | |
|---|---|
| ![SD web UI Forge](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-forge-insights.png) | ![SD web UI UX Forge](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-ux-forge-insights.png) |
| *lllyasviel - Stable Diffusion web UI Forge* | *Anapnoe - Stable Diffusion web UI UX Forge* |
 
⚠️ *Baseline metrics reflect measurements with **all additional webui extensions disabled** - particularly relevant for SD Forge's extensive collection - to ensure balanced comparisons; enabling these extensions raises event listeners beyond 16,000 and introduces significant test-run performance variability.*


### 🚀 Scalable Event Handling & DOM Optimization  
SD webUI UX implements **event delegation** + **virtualized grid** for O(1) performance scaling.

**Stable Diffusion web UI & web UI Forge Constraints**:
- **DOM Bloat**: Loads all assets → 10k LoRAs create 60k+ DOM nodes (10k images + 50k+ container elements)
- **Listener Overload**: ~5 listeners per asset → 50k+ listeners for 10K LoRAs
- **O(n) Scaling**: Linear performance degradation ***(Checkpoints, Textual Inversions, LoRAs, Hypernetworks)***

**Stable Diffusion web UI UX & web UI UX Forge optimized Architecture**:
- **Virtualized Grid**: Renders only visible assets (~15 items in default viewport)  
- **Event Delegation**: Single listener handles all interactions  
- **DOM Recycling**: Dynamic pool manages thumbnail elements  

🎯 **Performance Outcome**:  
- Flat memory profile (≈50MB heap regardless of model assets library size)  
- O(1) event handling complexity  
- Instant scrolling with 100K+ assets   
  
## Todo
- [ ] Separate and organize CSS into individual files (in progress).
- [ ] Create documentation for component integration into UI/UX.
- [ ] Automatically update the Image Browser's SQLite database when files added or removed.
- [ ] Improve Civitai Models download manager.
- [ ] Add virtualization for **Tree View** component.
- [ ] Develop framework-specific npm packages for the UI/UX Dynamic Virtualized Grid component, supporting React, Vue, Svelte, Solid, and Qwik.

## Workspaces UI-UX (in progress)(early access)
The workspaces extension empowers you to create customized views and organize them according to your unique preferences. With an intuitive drag-and-drop interface, you can design workflows that are perfectly tailored to your specific requirements, giving you ultimate control over your work environment.

[🌟 Get early access to Workspaces! 🌟](https://buymeacoffee.com/dayanbayah)

![anapnoe-ui-ux-workspaces](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-workspaces.png)

## Advanced Theme Style Configurator (in progress)(upcoming)
A sophisticated theme editor allowing you to personalize any aspect of the UI-UX. Tailor the visual experience of the user interface with the Advanced Theme Style configurator.

[🌟 Get early access to Advanced Theme Style Configurator! 🌟](https://buymeacoffee.com/dayanbayah)

![anapnoe-ui-ux-theme-editor-advanced](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-theme-editor-advanced.png)


## Installation and Running
Make sure the required [dependencies](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) are met and follow the instructions available for:
- [NVidia](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs) (recommended)
- [AMD](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs) GPUs.
- [Intel CPUs, Intel GPUs (both integrated and discrete)](https://github.com/openvinotoolkit/stable-diffusion-webui/wiki/Installation-on-Intel-Silicon) (external wiki page)
- [Ascend NPUs](https://github.com/wangshuai09/stable-diffusion-webui/wiki/Install-and-run-on-Ascend-NPUs) (external wiki page)

### Automatic Installation on Windows
1. Install [Python 3.10.6](https://www.python.org/downloads/release/python-3106/) (Newer version of Python does not support torch), checking "Add Python to PATH".
2. Install [git](https://git-scm.com/download/win).
3. Download the stable-diffusion-webui repository, for example by running `git clone https://github.com/anapnoe/stable-diffusion-webui-ux-forge.git`.
4. Run `webui-user.bat` from Windows Explorer as normal, non-administrator, user.

### Automatic Installation on Linux
1. Install the dependencies:
```bash
# Debian-based:
sudo apt install wget git python3 python3-venv libgl1 libglib2.0-0
# Red Hat-based:
sudo dnf install wget git python3 gperftools-libs libglvnd-glx
# openSUSE-based:
sudo zypper install wget git python3 libtcmalloc4 libglvnd
# Arch-based:
sudo pacman -S wget git python3
```
If your system is very new, you need to install python3.11 or python3.10:
```bash
# Ubuntu 24.04
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11

# Manjaro/Arch
sudo pacman -S yay
yay -S python311 # do not confuse with python3.11 package

# Only for 3.11
# Then set up env variable in launch script
export python_cmd="python3.11"
# or in webui-user.sh
python_cmd="python3.11"
```
2. Navigate to the directory you would like the webui to be installed and execute the following command:
```bash
wget -q https://raw.githubusercontent.com/anapnoe/stable-diffusion-webui-ux-forge/master/webui.sh
```
Or just clone the repo wherever you want:
```bash
git clone https://github.com/anapnoe/stable-diffusion-webui-ux-forge.git
```

3. Run `webui.sh`.
4. Check `webui-user.sh` for options.
### Installation on Apple Silicon

Find the instructions [here](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon).


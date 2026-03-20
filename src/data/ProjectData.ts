export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string;
    isWide: boolean;
    isHigh: boolean;
    accentColor: string;
    isFeatured: boolean;
    tags: string[];

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        html: string,
        accentColor = "#000000",
        isHigh = false,
        isWide = false,
        isFeatured = false,
        tags: string[] = []
    ) {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.isFeatured = isFeatured;
        this.tags = tags;
    }
}

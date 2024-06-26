// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface SinglePostPicture {
    graphql: Graphql;
}

export interface Graphql {
    shortcode_media: ShortcodeMedia;
}

export interface ShortcodeMedia {
    __typename:                      string;
    id:                              string;
    shortcode:                       string;
    dimensions:                      Dimensions;
    gating_info:                     null;
    fact_check_overall_rating:       null;
    fact_check_information:          null;
    sensitivity_friction_info:       null;
    sharing_friction_info:           SharingFrictionInfo;
    media_overlay_info:              null;
    media_preview:                   string;
    display_url:                     string;
    display_resources:               DisplayResource[];
    accessibility_caption:           string;
    is_video:                        boolean;
    tracking_token:                  string;
    edge_media_to_tagged_user:       EdgeMediaToTaggedUser;
    edge_media_to_caption:           EdgeMediaToCaptionClass;
    caption_is_edited:               boolean;
    has_ranked_comments:             boolean;
    edge_media_to_parent_comment:    EdgeMediaToParentCommentClass;
    edge_media_to_hoisted_comment:   EdgeMediaToCaptionClass;
    edge_media_preview_comment:      EdgeMediaPreview;
    comments_disabled:               boolean;
    commenting_disabled_for_viewer:  boolean;
    taken_at_timestamp:              number;
    edge_media_preview_like:         EdgeMediaPreview;
    edge_media_to_sponsor_user:      EdgeMediaToCaptionClass;
    location:                        null;
    viewer_has_liked:                boolean;
    viewer_has_saved:                boolean;
    viewer_has_saved_to_collection:  boolean;
    viewer_in_photo_of_you:          boolean;
    viewer_can_reshare:              boolean;
    owner:                           ShortcodeMediaOwner;
    is_ad:                           boolean;
    edge_web_media_to_related_media: EdgeMediaToCaptionClass;
    edge_related_profiles:           EdgeMediaToCaptionClass;
}

export interface Dimensions {
    height: number;
    width:  number;
}

export interface DisplayResource {
    src:           string;
    config_width:  number;
    config_height: number;
}

export interface EdgeMediaPreview {
    count: number;
    edges: EdgeMediaPreviewCommentEdge[];
}

export interface EdgeMediaToParentCommentClass {
    count:     number;
    page_info: PageInfo;
    edges:     EdgeMediaPreviewCommentEdge[];
}

export interface PurpleNode {
    id:                      string;
    text:                    string;
    created_at:              number;
    did_report_as_spam:      boolean;
    owner:                   UserClass;
    viewer_has_liked:        boolean;
    edge_liked_by:           EdgeFollowedByClass;
    is_restricted_pending:   boolean;
    edge_threaded_comments?: EdgeMediaToParentCommentClass;
}

export interface EdgeMediaPreviewCommentEdge {
    node: PurpleNode;
}

export interface PageInfo {
    has_next_page: boolean;
    end_cursor:    null;
}

export interface EdgeFollowedByClass {
    count: number;
}

export interface UserClass {
    id:              string;
    is_verified:     boolean;
    profile_pic_url: string;
    username:        string;
    full_name?:      string;
}

export interface EdgeMediaToCaptionClass {
    edges: EdgeMediaToCaptionEdge[];
}

export interface EdgeMediaToCaptionEdge {
    node: FluffyNode;
}

export interface FluffyNode {
    text: string;
}

export interface EdgeMediaToTaggedUser {
    edges: EdgeMediaToTaggedUserEdge[];
}

export interface EdgeMediaToTaggedUserEdge {
    node: TentacledNode;
}

export interface TentacledNode {
    user: UserClass;
    x:    number;
    y:    number;
}

export interface ShortcodeMediaOwner {
    id:                           string;
    is_verified:                  boolean;
    profile_pic_url:              string;
    username:                     string;
    blocked_by_viewer:            boolean;
    restricted_by_viewer:         null;
    followed_by_viewer:           boolean;
    full_name:                    string;
    has_blocked_viewer:           boolean;
    is_private:                   boolean;
    is_unpublished:               boolean;
    requested_by_viewer:          boolean;
    pass_tiering_recommendation:  boolean;
    edge_owner_to_timeline_media: EdgeFollowedByClass;
    edge_followed_by:             EdgeFollowedByClass;
}

export interface SharingFrictionInfo {
    should_have_sharing_friction: boolean;
    bloks_app_url:                null;
}

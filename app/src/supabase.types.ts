export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          address1: string | null
          address2: string | null
          date_created: string | null
          date_updated: string | null
          id: string
          location_id: number | null
          name: string | null
          user_id: string | null
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          date_created?: string | null
          date_updated?: string | null
          id: string
          location_id?: number | null
          name?: string | null
          user_id?: string | null
        }
        Update: {
          address1?: string | null
          address2?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: string
          location_id?: number | null
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      analytics_posts: {
        Row: {
          date_created: string | null
          date_updated: string | null
          end_watching: string | null
          id: number
          like_date: string | null
          post_id: string | null
          share_date: string | null
          start_watching: string | null
          user_id: string | null
          view_section: string | null
          watch_duration: number | null
          watch_in_full: boolean | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          end_watching?: string | null
          id?: number
          like_date?: string | null
          post_id?: string | null
          share_date?: string | null
          start_watching?: string | null
          user_id?: string | null
          view_section?: string | null
          watch_duration?: number | null
          watch_in_full?: boolean | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          end_watching?: string | null
          id?: number
          like_date?: string | null
          post_id?: string | null
          share_date?: string | null
          start_watching?: string | null
          user_id?: string | null
          view_section?: string | null
          watch_duration?: number | null
          watch_in_full?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_posts_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analytics_posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      breeders: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      cannabis_strain_relations: {
        Row: {
          child_id: number | null
          date_created: string
          date_updated: string
          id: number
          parent_id: number | null
        }
        Insert: {
          child_id?: number | null
          date_created?: string
          date_updated?: string
          id?: number
          parent_id?: number | null
        }
        Update: {
          child_id?: number | null
          date_created?: string
          date_updated?: string
          id?: number
          parent_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cannabis_strain_relations_child_id_fkey"
            columns: ["child_id"]
            referencedRelation: "cannabis_strains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cannabis_strain_relations_parent_id_fkey"
            columns: ["parent_id"]
            referencedRelation: "cannabis_strains"
            referencedColumns: ["id"]
          }
        ]
      }
      cannabis_strains: {
        Row: {
          aliases: string[] | null
          avatar_id: string | null
          banner_id: string | null
          breeder_id: number | null
          cbd: number | null
          cbn: number | null
          cultivation_description: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          name: string | null
          rating: number | null
          slug: string | null
          thc: number | null
          type_id: number | null
        }
        Insert: {
          aliases?: string[] | null
          avatar_id?: string | null
          banner_id?: string | null
          breeder_id?: number | null
          cbd?: number | null
          cbn?: number | null
          cultivation_description?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          rating?: number | null
          slug?: string | null
          thc?: number | null
          type_id?: number | null
        }
        Update: {
          aliases?: string[] | null
          avatar_id?: string | null
          banner_id?: string | null
          breeder_id?: number | null
          cbd?: number | null
          cbn?: number | null
          cultivation_description?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          rating?: number | null
          slug?: string | null
          thc?: number | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cannabis_strains_avatar_id_foreign"
            columns: ["avatar_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cannabis_strains_banner_id_foreign"
            columns: ["banner_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cannabis_strains_breeder_fkey"
            columns: ["breeder_id"]
            referencedRelation: "breeders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cannabis_strains_type_fkey"
            columns: ["type_id"]
            referencedRelation: "cannabis_types"
            referencedColumns: ["id"]
          }
        ]
      }
      cannabis_strains_product_features: {
        Row: {
          cannabis_strain_id: number | null
          id: number
          product_feature_id: number | null
        }
        Insert: {
          cannabis_strain_id?: number | null
          id?: number
          product_feature_id?: number | null
        }
        Update: {
          cannabis_strain_id?: number | null
          id?: number
          product_feature_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cannabis_strains_product_features_cannabis_strain_id_foreign"
            columns: ["cannabis_strain_id"]
            referencedRelation: "cannabis_strains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cannabis_strains_product_features_product_feature_id_foreign"
            columns: ["product_feature_id"]
            referencedRelation: "product_features"
            referencedColumns: ["id"]
          }
        ]
      }
      cannabis_types: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      cloud_files: {
        Row: {
          asset_id: string | null
          date_created: string | null
          date_updated: string | null
          format: string | null
          height: number | null
          id: string
          public_id: string | null
          resource_type: string | null
          secure_url: string | null
          signature: string | null
          url: string | null
          user_id: string | null
          width: number | null
        }
        Insert: {
          asset_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          format?: string | null
          height?: number | null
          id: string
          public_id?: string | null
          resource_type?: string | null
          secure_url?: string | null
          signature?: string | null
          url?: string | null
          user_id?: string | null
          width?: number | null
        }
        Update: {
          asset_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          format?: string | null
          height?: number | null
          id?: string
          public_id?: string | null
          resource_type?: string | null
          secure_url?: string | null
          signature?: string | null
          url?: string | null
          user_id?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cloud_files_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      deal_claims: {
        Row: {
          date_created: string | null
          date_updated: string | null
          deal_id: string | null
          id: string
          redeemed: boolean | null
          user_id: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          deal_id?: string | null
          id: string
          redeemed?: boolean | null
          user_id?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          deal_id?: string | null
          id?: string
          redeemed?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_claims_deal_id_foreign"
            columns: ["deal_id"]
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deal_claims_user_id_foreign"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      deals: {
        Row: {
          bogo_dollar_off: number | null
          bogo_percent_off: number | null
          claimed_deals: number | null
          conditions: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          dollar_off: number | null
          expiration_date: string | null
          expired: boolean | null
          header_message: string | null
          id: string
          is_medical: boolean | null
          is_recreational: boolean | null
          percent_off: number | null
          product_id: string | null
          release_date: string | null
          total_deals: number | null
        }
        Insert: {
          bogo_dollar_off?: number | null
          bogo_percent_off?: number | null
          claimed_deals?: number | null
          conditions?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          dollar_off?: number | null
          expiration_date?: string | null
          expired?: boolean | null
          header_message?: string | null
          id: string
          is_medical?: boolean | null
          is_recreational?: boolean | null
          percent_off?: number | null
          product_id?: string | null
          release_date?: string | null
          total_deals?: number | null
        }
        Update: {
          bogo_dollar_off?: number | null
          bogo_percent_off?: number | null
          claimed_deals?: number | null
          conditions?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          dollar_off?: number | null
          expiration_date?: string | null
          expired?: boolean | null
          header_message?: string | null
          id?: string
          is_medical?: boolean | null
          is_recreational?: boolean | null
          percent_off?: number | null
          product_id?: string | null
          release_date?: string | null
          total_deals?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      deals_dispensary_locations: {
        Row: {
          deals_id: string | null
          dispensary_locations_id: string | null
          id: number
        }
        Insert: {
          deals_id?: string | null
          dispensary_locations_id?: string | null
          id?: number
        }
        Update: {
          deals_id?: string | null
          dispensary_locations_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "deals_dispensary_locations_deals_id_fkey"
            columns: ["deals_id"]
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_dispensary_locations_dispensary_locations_id_fkey"
            columns: ["dispensary_locations_id"]
            referencedRelation: "dispensary_locations"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_activity: {
        Row: {
          action: string
          collection: string
          comment: string | null
          id: number
          ip: string | null
          item: string
          origin: string | null
          timestamp: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          collection: string
          comment?: string | null
          id?: number
          ip?: string | null
          item: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          collection?: string
          comment?: string | null
          id?: number
          ip?: string | null
          item?: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      directus_collections: {
        Row: {
          accountability: string | null
          archive_app_filter: boolean
          archive_field: string | null
          archive_value: string | null
          collapse: string
          collection: string
          color: string | null
          display_template: string | null
          group: string | null
          hidden: boolean
          icon: string | null
          item_duplication_fields: Json | null
          note: string | null
          singleton: boolean
          sort: number | null
          sort_field: string | null
          translations: Json | null
          unarchive_value: string | null
        }
        Insert: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
        }
        Update: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection?: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_collections_group_foreign"
            columns: ["group"]
            referencedRelation: "directus_collections"
            referencedColumns: ["collection"]
          }
        ]
      }
      directus_dashboards: {
        Row: {
          color: string | null
          date_created: string | null
          icon: string
          id: string
          name: string
          note: string | null
          user_created: string | null
        }
        Insert: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id: string
          name: string
          note?: string | null
          user_created?: string | null
        }
        Update: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id?: string
          name?: string
          note?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_dashboards_user_created_foreign"
            columns: ["user_created"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_fields: {
        Row: {
          collection: string
          conditions: Json | null
          display: string | null
          display_options: Json | null
          field: string
          group: string | null
          hidden: boolean
          id: number
          interface: string | null
          note: string | null
          options: Json | null
          readonly: boolean
          required: boolean | null
          sort: number | null
          special: string | null
          translations: Json | null
          validation: Json | null
          validation_message: string | null
          width: string | null
        }
        Insert: {
          collection: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Update: {
          collection?: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field?: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Relationships: []
      }
      directus_files: {
        Row: {
          charset: string | null
          description: string | null
          duration: number | null
          embed: string | null
          filename_disk: string | null
          filename_download: string
          filesize: number | null
          folder: string | null
          height: number | null
          id: string
          location: string | null
          metadata: Json | null
          modified_by: string | null
          modified_on: string
          storage: string
          tags: string | null
          title: string | null
          type: string | null
          uploaded_by: string | null
          uploaded_on: string
          width: number | null
        }
        Insert: {
          charset?: string | null
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download: string
          filesize?: number | null
          folder?: string | null
          height?: number | null
          id: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage: string
          tags?: string | null
          title?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string
          width?: number | null
        }
        Update: {
          charset?: string | null
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download?: string
          filesize?: number | null
          folder?: string | null
          height?: number | null
          id?: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage?: string
          tags?: string | null
          title?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_files_folder_foreign"
            columns: ["folder"]
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_files_modified_by_foreign"
            columns: ["modified_by"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_files_uploaded_by_foreign"
            columns: ["uploaded_by"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_flows: {
        Row: {
          accountability: string | null
          color: string | null
          date_created: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          operation: string | null
          options: Json | null
          status: string
          trigger: string | null
          user_created: string | null
        }
        Insert: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id: string
          name: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Update: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_flows_user_created_foreign"
            columns: ["user_created"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_folders: {
        Row: {
          id: string
          name: string
          parent: string | null
        }
        Insert: {
          id: string
          name: string
          parent?: string | null
        }
        Update: {
          id?: string
          name?: string
          parent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_folders_parent_foreign"
            columns: ["parent"]
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_migrations: {
        Row: {
          name: string
          timestamp: string | null
          version: string
        }
        Insert: {
          name: string
          timestamp?: string | null
          version: string
        }
        Update: {
          name?: string
          timestamp?: string | null
          version?: string
        }
        Relationships: []
      }
      directus_notifications: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          message: string | null
          recipient: string
          sender: string | null
          status: string | null
          subject: string
          timestamp: string | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient: string
          sender?: string | null
          status?: string | null
          subject: string
          timestamp?: string | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient?: string
          sender?: string | null
          status?: string | null
          subject?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_notifications_recipient_foreign"
            columns: ["recipient"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_notifications_sender_foreign"
            columns: ["sender"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_operations: {
        Row: {
          date_created: string | null
          flow: string
          id: string
          key: string
          name: string | null
          options: Json | null
          position_x: number
          position_y: number
          reject: string | null
          resolve: string | null
          type: string
          user_created: string | null
        }
        Insert: {
          date_created?: string | null
          flow: string
          id: string
          key: string
          name?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          reject?: string | null
          resolve?: string | null
          type: string
          user_created?: string | null
        }
        Update: {
          date_created?: string | null
          flow?: string
          id?: string
          key?: string
          name?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          reject?: string | null
          resolve?: string | null
          type?: string
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_operations_flow_foreign"
            columns: ["flow"]
            referencedRelation: "directus_flows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_reject_foreign"
            columns: ["reject"]
            referencedRelation: "directus_operations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_resolve_foreign"
            columns: ["resolve"]
            referencedRelation: "directus_operations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_user_created_foreign"
            columns: ["user_created"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_panels: {
        Row: {
          color: string | null
          dashboard: string
          date_created: string | null
          height: number
          icon: string | null
          id: string
          name: string | null
          note: string | null
          options: Json | null
          position_x: number
          position_y: number
          show_header: boolean
          type: string
          user_created: string | null
          width: number
        }
        Insert: {
          color?: string | null
          dashboard: string
          date_created?: string | null
          height: number
          icon?: string | null
          id: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          show_header?: boolean
          type: string
          user_created?: string | null
          width: number
        }
        Update: {
          color?: string | null
          dashboard?: string
          date_created?: string | null
          height?: number
          icon?: string | null
          id?: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          show_header?: boolean
          type?: string
          user_created?: string | null
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "directus_panels_dashboard_foreign"
            columns: ["dashboard"]
            referencedRelation: "directus_dashboards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_panels_user_created_foreign"
            columns: ["user_created"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_permissions: {
        Row: {
          action: string
          collection: string
          fields: string | null
          id: number
          permissions: Json | null
          presets: Json | null
          role: string | null
          validation: Json | null
        }
        Insert: {
          action: string
          collection: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          presets?: Json | null
          role?: string | null
          validation?: Json | null
        }
        Update: {
          action?: string
          collection?: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          presets?: Json | null
          role?: string | null
          validation?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_permissions_role_foreign"
            columns: ["role"]
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_presets: {
        Row: {
          bookmark: string | null
          collection: string | null
          color: string | null
          filter: Json | null
          icon: string
          id: number
          layout: string | null
          layout_options: Json | null
          layout_query: Json | null
          refresh_interval: number | null
          role: string | null
          search: string | null
          user: string | null
        }
        Insert: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Update: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_presets_role_foreign"
            columns: ["role"]
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_presets_user_foreign"
            columns: ["user"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_relations: {
        Row: {
          id: number
          junction_field: string | null
          many_collection: string
          many_field: string
          one_allowed_collections: string | null
          one_collection: string | null
          one_collection_field: string | null
          one_deselect_action: string
          one_field: string | null
          sort_field: string | null
        }
        Insert: {
          id?: number
          junction_field?: string | null
          many_collection: string
          many_field: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Update: {
          id?: number
          junction_field?: string | null
          many_collection?: string
          many_field?: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Relationships: []
      }
      directus_revisions: {
        Row: {
          activity: number
          collection: string
          data: Json | null
          delta: Json | null
          id: number
          item: string
          parent: number | null
        }
        Insert: {
          activity: number
          collection: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item: string
          parent?: number | null
        }
        Update: {
          activity?: number
          collection?: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item?: string
          parent?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_revisions_activity_foreign"
            columns: ["activity"]
            referencedRelation: "directus_activity"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_revisions_parent_foreign"
            columns: ["parent"]
            referencedRelation: "directus_revisions"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_roles: {
        Row: {
          admin_access: boolean
          app_access: boolean
          collection_list: Json | null
          description: string | null
          enforce_tfa: boolean
          icon: string
          id: string
          ip_access: string | null
          module_list: Json | null
          name: string
        }
        Insert: {
          admin_access?: boolean
          app_access?: boolean
          collection_list?: Json | null
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id: string
          ip_access?: string | null
          module_list?: Json | null
          name: string
        }
        Update: {
          admin_access?: boolean
          app_access?: boolean
          collection_list?: Json | null
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id?: string
          ip_access?: string | null
          module_list?: Json | null
          name?: string
        }
        Relationships: []
      }
      directus_sessions: {
        Row: {
          expires: string
          ip: string | null
          origin: string | null
          share: string | null
          token: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          expires: string
          ip?: string | null
          origin?: string | null
          share?: string | null
          token: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          expires?: string
          ip?: string | null
          origin?: string | null
          share?: string | null
          token?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_sessions_share_foreign"
            columns: ["share"]
            referencedRelation: "directus_shares"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_sessions_user_foreign"
            columns: ["user"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_settings: {
        Row: {
          auth_login_attempts: number | null
          auth_password_policy: string | null
          basemaps: Json | null
          custom_aspect_ratios: Json | null
          custom_css: string | null
          default_language: string
          id: number
          mapbox_key: string | null
          module_bar: Json | null
          project_color: string | null
          project_descriptor: string | null
          project_logo: string | null
          project_name: string
          project_url: string | null
          public_background: string | null
          public_foreground: string | null
          public_note: string | null
          storage_asset_presets: Json | null
          storage_asset_transform: string | null
          storage_default_folder: string | null
          translation_strings: Json | null
        }
        Insert: {
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_language?: string
          id?: number
          mapbox_key?: string | null
          module_bar?: Json | null
          project_color?: string | null
          project_descriptor?: string | null
          project_logo?: string | null
          project_name?: string
          project_url?: string | null
          public_background?: string | null
          public_foreground?: string | null
          public_note?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          translation_strings?: Json | null
        }
        Update: {
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_language?: string
          id?: number
          mapbox_key?: string | null
          module_bar?: Json | null
          project_color?: string | null
          project_descriptor?: string | null
          project_logo?: string | null
          project_name?: string
          project_url?: string | null
          public_background?: string | null
          public_foreground?: string | null
          public_note?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          translation_strings?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_settings_project_logo_foreign"
            columns: ["project_logo"]
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_background_foreign"
            columns: ["public_background"]
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_foreground_foreign"
            columns: ["public_foreground"]
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_storage_default_folder_foreign"
            columns: ["storage_default_folder"]
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_shares: {
        Row: {
          collection: string | null
          date_created: string | null
          date_end: string | null
          date_start: string | null
          id: string
          item: string | null
          max_uses: number | null
          name: string | null
          password: string | null
          role: string | null
          times_used: number | null
          user_created: string | null
        }
        Insert: {
          collection?: string | null
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id: string
          item?: string | null
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Update: {
          collection?: string | null
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id?: string
          item?: string | null
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_shares_collection_foreign"
            columns: ["collection"]
            referencedRelation: "directus_collections"
            referencedColumns: ["collection"]
          },
          {
            foreignKeyName: "directus_shares_role_foreign"
            columns: ["role"]
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_shares_user_created_foreign"
            columns: ["user_created"]
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_users: {
        Row: {
          auth_data: Json | null
          avatar: string | null
          description: string | null
          email: string | null
          email_notifications: boolean | null
          external_identifier: string | null
          first_name: string | null
          id: string
          language: string | null
          last_access: string | null
          last_name: string | null
          last_page: string | null
          location: string | null
          password: string | null
          provider: string
          role: string | null
          status: string
          tags: Json | null
          tfa_secret: string | null
          theme: string | null
          title: string | null
          token: string | null
        }
        Insert: {
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          tfa_secret?: string | null
          theme?: string | null
          title?: string | null
          token?: string | null
        }
        Update: {
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id?: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          tfa_secret?: string | null
          theme?: string | null
          title?: string | null
          token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_users_role_foreign"
            columns: ["role"]
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          }
        ]
      }
      directus_webhooks: {
        Row: {
          actions: string
          collections: string
          data: boolean
          headers: Json | null
          id: number
          method: string
          name: string
          status: string
          url: string
        }
        Insert: {
          actions: string
          collections: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          name: string
          status?: string
          url: string
        }
        Update: {
          actions?: string
          collections?: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          name?: string
          status?: string
          url?: string
        }
        Relationships: []
      }
      dispensaries: {
        Row: {
          about_us: string | null
          claimed: boolean | null
          date_created: string | null
          date_updated: string | null
          deal_header_logo_id: string | null
          email: string | null
          facebook: string | null
          id: string
          instagram: string | null
          linkedin: string | null
          name: string | null
          phone: string | null
          profile_picture_id: string | null
          reviewed: boolean | null
          slug: string | null
          status: string
          tiktok: string | null
          twitter: string | null
          verified: boolean | null
          website: string | null
        }
        Insert: {
          about_us?: string | null
          claimed?: boolean | null
          date_created?: string | null
          date_updated?: string | null
          deal_header_logo_id?: string | null
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          linkedin?: string | null
          name?: string | null
          phone?: string | null
          profile_picture_id?: string | null
          reviewed?: boolean | null
          slug?: string | null
          status?: string
          tiktok?: string | null
          twitter?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Update: {
          about_us?: string | null
          claimed?: boolean | null
          date_created?: string | null
          date_updated?: string | null
          deal_header_logo_id?: string | null
          email?: string | null
          facebook?: string | null
          id?: string
          instagram?: string | null
          linkedin?: string | null
          name?: string | null
          phone?: string | null
          profile_picture_id?: string | null
          reviewed?: boolean | null
          slug?: string | null
          status?: string
          tiktok?: string | null
          twitter?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dispensaries_deal_header_logo_id_foreign"
            columns: ["deal_header_logo_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispensaries_profile_picture_id_foreign"
            columns: ["profile_picture_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          }
        ]
      }
      dispensary_amenities: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      dispensary_locations: {
        Row: {
          about_us: string | null
          accepts_credit_cards: boolean | null
          address1: string | null
          address2: string | null
          brand_id: string | null
          claimed: boolean | null
          code: string | null
          date_created: string | null
          date_updated: string | null
          delivery_details: string | null
          delivery_radius: number | null
          dispensary_id: string | null
          email: string | null
          facebook: string | null
          friday_close: string | null
          friday_open: string | null
          has_atm: boolean | null
          has_curbside_pickup: boolean | null
          has_delivery: boolean | null
          has_handicap_access: boolean | null
          has_lab_measured_items: boolean | null
          has_pickup: boolean | null
          has_security_guard: boolean | null
          has_storefront: boolean | null
          has_testing: boolean | null
          id: string
          instagram: string | null
          is_brand_preferred_listing: boolean | null
          is_medical: boolean | null
          is_recreational: boolean | null
          license_type: string | null
          licenses: Json | null
          location: unknown | null
          member_since: number | null
          message: string | null
          min_age: number | null
          monday_close: string | null
          monday_open: string | null
          name: string | null
          phone: string | null
          postal_code: number | null
          reviewed: boolean | null
          saturday_close: string | null
          saturday_open: string | null
          slug: string | null
          social_equity: boolean | null
          status: string
          sunday_close: string | null
          sunday_open: string | null
          thursday_close: string | null
          thursday_open: string | null
          tiktok: string | null
          tuesday_close: string | null
          tuesday_open: string | null
          twitter: string | null
          verified: boolean | null
          website: string | null
          wednesday_close: string | null
          wednesday_open: string | null
          youtube: string | null
          zip_code: number | null
        }
        Insert: {
          about_us?: string | null
          accepts_credit_cards?: boolean | null
          address1?: string | null
          address2?: string | null
          brand_id?: string | null
          claimed?: boolean | null
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          delivery_details?: string | null
          delivery_radius?: number | null
          dispensary_id?: string | null
          email?: string | null
          facebook?: string | null
          friday_close?: string | null
          friday_open?: string | null
          has_atm?: boolean | null
          has_curbside_pickup?: boolean | null
          has_delivery?: boolean | null
          has_handicap_access?: boolean | null
          has_lab_measured_items?: boolean | null
          has_pickup?: boolean | null
          has_security_guard?: boolean | null
          has_storefront?: boolean | null
          has_testing?: boolean | null
          id?: string
          instagram?: string | null
          is_brand_preferred_listing?: boolean | null
          is_medical?: boolean | null
          is_recreational?: boolean | null
          license_type?: string | null
          licenses?: Json | null
          location?: unknown | null
          member_since?: number | null
          message?: string | null
          min_age?: number | null
          monday_close?: string | null
          monday_open?: string | null
          name?: string | null
          phone?: string | null
          postal_code?: number | null
          reviewed?: boolean | null
          saturday_close?: string | null
          saturday_open?: string | null
          slug?: string | null
          social_equity?: boolean | null
          status?: string
          sunday_close?: string | null
          sunday_open?: string | null
          thursday_close?: string | null
          thursday_open?: string | null
          tiktok?: string | null
          tuesday_close?: string | null
          tuesday_open?: string | null
          twitter?: string | null
          verified?: boolean | null
          website?: string | null
          wednesday_close?: string | null
          wednesday_open?: string | null
          youtube?: string | null
          zip_code?: number | null
        }
        Update: {
          about_us?: string | null
          accepts_credit_cards?: boolean | null
          address1?: string | null
          address2?: string | null
          brand_id?: string | null
          claimed?: boolean | null
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          delivery_details?: string | null
          delivery_radius?: number | null
          dispensary_id?: string | null
          email?: string | null
          facebook?: string | null
          friday_close?: string | null
          friday_open?: string | null
          has_atm?: boolean | null
          has_curbside_pickup?: boolean | null
          has_delivery?: boolean | null
          has_handicap_access?: boolean | null
          has_lab_measured_items?: boolean | null
          has_pickup?: boolean | null
          has_security_guard?: boolean | null
          has_storefront?: boolean | null
          has_testing?: boolean | null
          id?: string
          instagram?: string | null
          is_brand_preferred_listing?: boolean | null
          is_medical?: boolean | null
          is_recreational?: boolean | null
          license_type?: string | null
          licenses?: Json | null
          location?: unknown | null
          member_since?: number | null
          message?: string | null
          min_age?: number | null
          monday_close?: string | null
          monday_open?: string | null
          name?: string | null
          phone?: string | null
          postal_code?: number | null
          reviewed?: boolean | null
          saturday_close?: string | null
          saturday_open?: string | null
          slug?: string | null
          social_equity?: boolean | null
          status?: string
          sunday_close?: string | null
          sunday_open?: string | null
          thursday_close?: string | null
          thursday_open?: string | null
          tiktok?: string | null
          tuesday_close?: string | null
          tuesday_open?: string | null
          twitter?: string | null
          verified?: boolean | null
          website?: string | null
          wednesday_close?: string | null
          wednesday_open?: string | null
          youtube?: string | null
          zip_code?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dispensary_locations_brand_id_fkey"
            columns: ["brand_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispensary_locations_dispensary_id_foreign"
            columns: ["dispensary_id"]
            referencedRelation: "dispensaries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispensary_locations_postal_code_foreign"
            columns: ["postal_code"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispensary_locations_zip_code_foreign"
            columns: ["zip_code"]
            referencedRelation: "us_locations"
            referencedColumns: ["id"]
          }
        ]
      }
      dispensary_locations_cloud_files: {
        Row: {
          cloud_files_id: string | null
          dispensary_locations_id: string | null
          id: number
        }
        Insert: {
          cloud_files_id?: string | null
          dispensary_locations_id?: string | null
          id?: number
        }
        Update: {
          cloud_files_id?: string | null
          dispensary_locations_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "dispensary_locations_cloud_files_cloud_files_id_foreign"
            columns: ["cloud_files_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dispensary_locations_cloud_files_dispensar__3e0676a2_foreign"
            columns: ["dispensary_locations_id"]
            referencedRelation: "dispensary_locations"
            referencedColumns: ["id"]
          }
        ]
      }
      dispensary_order_types: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      dispensary_sales_types: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      dispensary_store_types: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      explore: {
        Row: {
          date_created: string | null
          date_updated: string | null
          default: boolean | null
          description: string | null
          end_date: string | null
          id: number
          name: string | null
          slug: string | null
          start_date: string | null
          thumbnail_id: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          default?: boolean | null
          description?: string | null
          end_date?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          start_date?: string | null
          thumbnail_id?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          default?: boolean | null
          description?: string | null
          end_date?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          start_date?: string | null
          thumbnail_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_thumbnail_id_foreign"
            columns: ["thumbnail_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_dispensary_locations: {
        Row: {
          dispensary_location_id: string | null
          explore_id: number | null
          id: number
        }
        Insert: {
          dispensary_location_id?: string | null
          explore_id?: number | null
          id?: number
        }
        Update: {
          dispensary_location_id?: string | null
          explore_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "explore_dispensary_locations_dispensary_location_id_fkey"
            columns: ["dispensary_location_id"]
            referencedRelation: "dispensary_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "explore_dispensary_locations_explore_id_fkey"
            columns: ["explore_id"]
            referencedRelation: "explore"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_lists: {
        Row: {
          explore_id: number | null
          id: number
          list_id: string | null
        }
        Insert: {
          explore_id?: number | null
          id?: number
          list_id?: string | null
        }
        Update: {
          explore_id?: number | null
          id?: number
          list_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_lists_explore_id_fkey"
            columns: ["explore_id"]
            referencedRelation: "explore"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "explore_lists_list_id_fkey"
            columns: ["list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_page: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
        }
        Relationships: []
      }
      explore_page_sections: {
        Row: {
          collection: string | null
          explore_page_id: number | null
          id: number
          item: string | null
          sort: number | null
        }
        Insert: {
          collection?: string | null
          explore_page_id?: number | null
          id?: number
          item?: string | null
          sort?: number | null
        }
        Update: {
          collection?: string | null
          explore_page_id?: number | null
          id?: number
          item?: string | null
          sort?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_page_sections_explore_page_id_fkey"
            columns: ["explore_page_id"]
            referencedRelation: "explore_page"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_posts: {
        Row: {
          explore_id: number | null
          id: number
          post_id: string | null
        }
        Insert: {
          explore_id?: number | null
          id?: number
          post_id?: string | null
        }
        Update: {
          explore_id?: number | null
          id?: number
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_posts_explore_id_fkey"
            columns: ["explore_id"]
            referencedRelation: "explore"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "explore_posts_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_products: {
        Row: {
          explore_id: number | null
          id: number
          product_id: string | null
        }
        Insert: {
          explore_id?: number | null
          id?: number
          product_id?: string | null
        }
        Update: {
          explore_id?: number | null
          id?: number
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_products_explore_id_fkey"
            columns: ["explore_id"]
            referencedRelation: "explore"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "explore_products_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      explore_trending: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      explore_users: {
        Row: {
          explore_id: number | null
          id: number
          user_id: string | null
        }
        Insert: {
          explore_id?: number | null
          id?: number
          user_id?: string | null
        }
        Update: {
          explore_id?: number | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explore_users_explore_id_fkey"
            columns: ["explore_id"]
            referencedRelation: "explore"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "explore_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      files: {
        Row: {
          date_created: string
          date_updated: string
          id: string
          name: string | null
          signed_url: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: string
          name?: string | null
          signed_url?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: string
          name?: string | null
          signed_url?: string | null
        }
        Relationships: []
      }
      giveaway_entries: {
        Row: {
          date_created: string | null
          date_updated: string | null
          giveaway_id: string | null
          id: string
          sent: boolean | null
          shipping_notes: string | null
          user_id: string | null
          won: boolean | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          giveaway_id?: string | null
          id?: string
          sent?: boolean | null
          shipping_notes?: string | null
          user_id?: string | null
          won?: boolean | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          giveaway_id?: string | null
          id?: string
          sent?: boolean | null
          shipping_notes?: string | null
          user_id?: string | null
          won?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "giveaway_entries_giveaway_id_fkey"
            columns: ["giveaway_id"]
            referencedRelation: "giveaways"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "giveaway_entries_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      giveaways: {
        Row: {
          cover_id: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          end_time: string | null
          entry_count: number
          id: string
          name: string | null
          product_id: string | null
          redeemed: boolean | null
          selected_winner: boolean | null
          start_time: string | null
          terms_url: string | null
          total_prizes: number | null
          winner_count: number | null
        }
        Insert: {
          cover_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          entry_count?: number
          id: string
          name?: string | null
          product_id?: string | null
          redeemed?: boolean | null
          selected_winner?: boolean | null
          start_time?: string | null
          terms_url?: string | null
          total_prizes?: number | null
          winner_count?: number | null
        }
        Update: {
          cover_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          entry_count?: number
          id?: string
          name?: string | null
          product_id?: string | null
          redeemed?: boolean | null
          selected_winner?: boolean | null
          start_time?: string | null
          terms_url?: string | null
          total_prizes?: number | null
          winner_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "giveaways_cover_id_fkey"
            columns: ["cover_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "giveaways_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      giveaways_regions: {
        Row: {
          giveaway_id: string | null
          id: number
          region_id: number | null
        }
        Insert: {
          giveaway_id?: string | null
          id?: number
          region_id?: number | null
        }
        Update: {
          giveaway_id?: string | null
          id?: number
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "giveaways_regions_giveaway_id_fkey"
            columns: ["giveaway_id"]
            referencedRelation: "giveaways"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "giveaways_regions_region_id_fkey"
            columns: ["region_id"]
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
      }
      growers: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      likes: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          posts_id: string | null
          users_id: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          posts_id?: string | null
          users_id?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          posts_id?: string | null
          users_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_posts_id_fkey"
            columns: ["posts_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_users_id_fkey"
            columns: ["users_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      lists: {
        Row: {
          background_id: string | null
          base: boolean | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: string
          name: string | null
          product_count: number
          sort: string[] | null
          thumbnail_id: string | null
          user_id: string | null
        }
        Insert: {
          background_id?: string | null
          base?: boolean | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: string
          name?: string | null
          product_count?: number
          sort?: string[] | null
          thumbnail_id?: string | null
          user_id?: string | null
        }
        Update: {
          background_id?: string | null
          base?: boolean | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: string
          name?: string | null
          product_count?: number
          sort?: string[] | null
          thumbnail_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_background_id_foreign"
            columns: ["background_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_thumbnail_id_foreign"
            columns: ["thumbnail_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      lists_products: {
        Row: {
          date_created: string | null
          id: number
          lists_id: string | null
          products_id: string | null
        }
        Insert: {
          date_created?: string | null
          id?: number
          lists_id?: string | null
          products_id?: string | null
        }
        Update: {
          date_created?: string | null
          id?: number
          lists_id?: string | null
          products_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_products_lists_id_fkey"
            columns: ["lists_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_products_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      notification_types: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          actor_id: string | null
          date_created: string | null
          date_updated: string | null
          giveaway_id: string | null
          id: string
          list_id: string | null
          message: string | null
          post_id: string | null
          product_id: string | null
          read: boolean | null
          type_id: number | null
          user_id: string | null
        }
        Insert: {
          actor_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          giveaway_id?: string | null
          id?: string
          list_id?: string | null
          message?: string | null
          post_id?: string | null
          product_id?: string | null
          read?: boolean | null
          type_id?: number | null
          user_id?: string | null
        }
        Update: {
          actor_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          giveaway_id?: string | null
          id?: string
          list_id?: string | null
          message?: string | null
          post_id?: string | null
          product_id?: string | null
          read?: boolean | null
          type_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_actor_id_fkey"
            columns: ["actor_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_giveaway_id_fkey"
            columns: ["giveaway_id"]
            referencedRelation: "giveaways"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_list_id_fkey"
            columns: ["list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_type_id_foreign"
            columns: ["type_id"]
            referencedRelation: "notification_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      post_log: {
        Row: {
          date_created: string | null
          flagged: boolean | null
          id: number
          post_id: string | null
          user_id: string | null
        }
        Insert: {
          date_created?: string | null
          flagged?: boolean | null
          id?: number
          post_id?: string | null
          user_id?: string | null
        }
        Update: {
          date_created?: string | null
          flagged?: boolean | null
          id?: number
          post_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_log_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_log_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      post_tags: {
        Row: {
          count: number | null
          date_created: string | null
          date_updated: string | null
          id: number
          tag: string | null
        }
        Insert: {
          count?: number | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          tag?: string | null
        }
        Update: {
          count?: number | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          tag?: string | null
        }
        Relationships: []
      }
      postal_codes: {
        Row: {
          accuracy: number | null
          community: string | null
          community_code: string | null
          country_code: string | null
          county: string | null
          county_code: string | null
          date_created: string | null
          date_updated: string | null
          geom: unknown | null
          id: number
          latitude: number | null
          longitude: number | null
          place_name: string | null
          postal_code: string | null
          state: string | null
          state_code: string | null
        }
        Insert: {
          accuracy?: number | null
          community?: string | null
          community_code?: string | null
          country_code?: string | null
          county?: string | null
          county_code?: string | null
          date_created?: string | null
          date_updated?: string | null
          geom?: unknown | null
          id?: number
          latitude?: number | null
          longitude?: number | null
          place_name?: string | null
          postal_code?: string | null
          state?: string | null
          state_code?: string | null
        }
        Update: {
          accuracy?: number | null
          community?: string | null
          community_code?: string | null
          country_code?: string | null
          county?: string | null
          county_code?: string | null
          date_created?: string | null
          date_updated?: string | null
          geom?: unknown | null
          id?: number
          latitude?: number | null
          longitude?: number | null
          place_name?: string | null
          postal_code?: string | null
          state?: string | null
          state_code?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          average_watch_time: number | null
          date_created: string | null
          date_updated: string | null
          file_id: string | null
          flagged: boolean | null
          geotag: unknown | null
          has_file: boolean | null
          id: string
          like_count: number
          live_time: string | null
          location_id: number | null
          message: string | null
          pinned: boolean
          promoted: boolean
          reach_count: number | null
          share_count: number | null
          status: string | null
          total_watch_time: number | null
          url: string | null
          user_id: string | null
          view_count: number | null
          watched_in_full_count: number | null
        }
        Insert: {
          average_watch_time?: number | null
          date_created?: string | null
          date_updated?: string | null
          file_id?: string | null
          flagged?: boolean | null
          geotag?: unknown | null
          has_file?: boolean | null
          id?: string
          like_count?: number
          live_time?: string | null
          location_id?: number | null
          message?: string | null
          pinned?: boolean
          promoted?: boolean
          reach_count?: number | null
          share_count?: number | null
          status?: string | null
          total_watch_time?: number | null
          url?: string | null
          user_id?: string | null
          view_count?: number | null
          watched_in_full_count?: number | null
        }
        Update: {
          average_watch_time?: number | null
          date_created?: string | null
          date_updated?: string | null
          file_id?: string | null
          flagged?: boolean | null
          geotag?: unknown | null
          has_file?: boolean | null
          id?: string
          like_count?: number
          live_time?: string | null
          location_id?: number | null
          message?: string | null
          pinned?: boolean
          promoted?: boolean
          reach_count?: number | null
          share_count?: number | null
          status?: string | null
          total_watch_time?: number | null
          url?: string | null
          user_id?: string | null
          view_count?: number | null
          watched_in_full_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_file_id_fkey"
            columns: ["file_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_hashtags: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          post_tags_id: number | null
          posts_id: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          post_tags_id?: number | null
          posts_id?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          post_tags_id?: number | null
          posts_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_hashtags_post_tags_id_fkey"
            columns: ["post_tags_id"]
            referencedRelation: "post_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_hashtags_posts_id_fkey"
            columns: ["posts_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_products: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          posts_id: string | null
          products_id: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          posts_id?: string | null
          products_id?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          posts_id?: string | null
          products_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_products_posts_id_fkey"
            columns: ["posts_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_products_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      product_categories: {
        Row: {
          date_created: string
          date_updated: string
          description: string | null
          fts: unknown | null
          id: string
          image_id: string | null
          name: string | null
          parent_id: string | null
          product_count: number | null
          slug: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          description?: string | null
          fts?: unknown | null
          id?: string
          image_id?: string | null
          name?: string | null
          parent_id?: string | null
          product_count?: number | null
          slug?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          description?: string | null
          fts?: unknown | null
          id?: string
          image_id?: string | null
          name?: string | null
          parent_id?: string | null
          product_count?: number | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_product_category_parent"
            columns: ["parent_id"]
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_image_id_foreign"
            columns: ["image_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          }
        ]
      }
      product_feature_types: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      product_features: {
        Row: {
          id: number
          name: string | null
          type_id: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          type_id?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_features_type_id_foreign"
            columns: ["type_id"]
            referencedRelation: "product_feature_types"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          additional_information: Json | null
          category_id: string | null
          cover_id: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          fts: unknown | null
          giveawayAmount: number | null
          id: string
          list_count: number
          name: string | null
          post_count: number | null
          post_id: string | null
          price: number | null
          release_date: string | null
          reviewed: boolean | null
          slug: string | null
          stash_count: number
          status: string | null
          thumbnail_id: string | null
          url: string | null
          verified: boolean | null
        }
        Insert: {
          additional_information?: Json | null
          category_id?: string | null
          cover_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          fts?: unknown | null
          giveawayAmount?: number | null
          id?: string
          list_count?: number
          name?: string | null
          post_count?: number | null
          post_id?: string | null
          price?: number | null
          release_date?: string | null
          reviewed?: boolean | null
          slug?: string | null
          stash_count?: number
          status?: string | null
          thumbnail_id?: string | null
          url?: string | null
          verified?: boolean | null
        }
        Update: {
          additional_information?: Json | null
          category_id?: string | null
          cover_id?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          fts?: unknown | null
          giveawayAmount?: number | null
          id?: string
          list_count?: number
          name?: string | null
          post_count?: number | null
          post_id?: string | null
          price?: number | null
          release_date?: string | null
          reviewed?: boolean | null
          slug?: string | null
          stash_count?: number
          status?: string | null
          thumbnail_id?: string | null
          url?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_cover_id_foreign"
            columns: ["cover_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_thumbnail_id_foreign"
            columns: ["thumbnail_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          }
        ]
      }
      products_brands: {
        Row: {
          id: number
          products_id: string | null
          users_id: string | null
        }
        Insert: {
          id?: number
          products_id?: string | null
          users_id?: string | null
        }
        Update: {
          id?: number
          products_id?: string | null
          users_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_brands_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_brands_users_id_fkey"
            columns: ["users_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      products_cannabis_strains: {
        Row: {
          cannabis_strains_id: number | null
          date_created: string
          date_updated: string
          id: number
          products_id: string | null
        }
        Insert: {
          cannabis_strains_id?: number | null
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
        }
        Update: {
          cannabis_strains_id?: number | null
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_cannabis_strains_cannabis_strains_id_fkey"
            columns: ["cannabis_strains_id"]
            referencedRelation: "cannabis_strains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_cannabis_strains_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_cannabis_strains_1: {
        Row: {
          cannabis_strain_id: number | null
          id: number
          product_id: string | null
        }
        Insert: {
          cannabis_strain_id?: number | null
          id?: number
          product_id?: string | null
        }
        Update: {
          cannabis_strain_id?: number | null
          id?: number
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_cannabis_strains_1_cannabis_strain_id_fkey"
            columns: ["cannabis_strain_id"]
            referencedRelation: "cannabis_strains"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_cannabis_strains_1_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_cloud_files: {
        Row: {
          cloud_files_id: string | null
          id: number
          products_id: string | null
        }
        Insert: {
          cloud_files_id?: string | null
          id?: number
          products_id?: string | null
        }
        Update: {
          cloud_files_id?: string | null
          id?: number
          products_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_cloud_files_cloud_files_id_fkey"
            columns: ["cloud_files_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_cloud_files_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_product_features_2: {
        Row: {
          id: number
          product_feature_id: number | null
          product_id: string | null
        }
        Insert: {
          id?: number
          product_feature_id?: number | null
          product_id?: string | null
        }
        Update: {
          id?: number
          product_feature_id?: number | null
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_product_features_2_product_feature_id_fkey"
            columns: ["product_feature_id"]
            referencedRelation: "product_features"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_product_features_2_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_products: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          products_id: string | null
          products_related_id: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          products_related_id?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          products_related_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_products_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_products_products_related_id_fkey"
            columns: ["products_related_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products_states: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          products_id: string | null
          states_id: number | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          states_id?: number | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_states_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_states_states_id_fkey"
            columns: ["states_id"]
            referencedRelation: "states"
            referencedColumns: ["id"]
          }
        ]
      }
      region_postal_codes: {
        Row: {
          id: number
          postal_code_id: number | null
          region_id: number | null
        }
        Insert: {
          id?: number
          postal_code_id?: number | null
          region_id?: number | null
        }
        Update: {
          id?: number
          postal_code_id?: number | null
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "region_postal_codes_postal_code_id_foreign"
            columns: ["postal_code_id"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "region_postal_codes_region_id_foreign"
            columns: ["region_id"]
            referencedRelation: "regions"
            referencedColumns: ["id"]
          }
        ]
      }
      regions: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      relationships: {
        Row: {
          date_created: string
          date_updated: string
          followee_id: string
          follower_id: string
          id: number
          role_id: number | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          followee_id: string
          follower_id: string
          id?: number
          role_id?: number | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          followee_id?: string
          follower_id?: string
          id?: number
          role_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "relationships_followee_id_fkey"
            columns: ["followee_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relationships_follower_id_fkey"
            columns: ["follower_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          role: string
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          role: string
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          role?: string
        }
        Relationships: []
      }
      stash: {
        Row: {
          date_created: string
          date_updated: string
          id: number
          products_id: string | null
          restash_id: string | null
          restash_list_id: string | null
          restash_post_id: string | null
          users_id: string | null
        }
        Insert: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          restash_id?: string | null
          restash_list_id?: string | null
          restash_post_id?: string | null
          users_id?: string | null
        }
        Update: {
          date_created?: string
          date_updated?: string
          id?: number
          products_id?: string | null
          restash_id?: string | null
          restash_list_id?: string | null
          restash_post_id?: string | null
          users_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stash_products_id_fkey"
            columns: ["products_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stash_restash_id_fkey"
            columns: ["restash_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stash_restash_list_id_fkey"
            columns: ["restash_list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stash_restash_post_id_fkey"
            columns: ["restash_post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stash_users_id_fkey"
            columns: ["users_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      states: {
        Row: {
          abbr: string | null
          date_created: string
          date_updated: string
          id: number
          name: string | null
        }
        Insert: {
          abbr?: string | null
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
        }
        Update: {
          abbr?: string | null
          date_created?: string
          date_updated?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      subscriptions_lists: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          list_id: string | null
          user_id: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          list_id?: string | null
          user_id?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          list_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_lists_list_id_fkey"
            columns: ["list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_lists_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      typesense_import_log: {
        Row: {
          category_count: number | null
          date_created: string | null
          date_updated: string | null
          deal_count: number | null
          dispensary_count: number | null
          giveaway_count: number | null
          id: number
          list_count: number | null
          post_count: number | null
          postal_code_count: number | null
          product_count: number | null
          strain_count: number | null
          user_count: number | null
        }
        Insert: {
          category_count?: number | null
          date_created?: string | null
          date_updated?: string | null
          deal_count?: number | null
          dispensary_count?: number | null
          giveaway_count?: number | null
          id?: number
          list_count?: number | null
          post_count?: number | null
          postal_code_count?: number | null
          product_count?: number | null
          strain_count?: number | null
          user_count?: number | null
        }
        Update: {
          category_count?: number | null
          date_created?: string | null
          date_updated?: string | null
          deal_count?: number | null
          dispensary_count?: number | null
          giveaway_count?: number | null
          id?: number
          list_count?: number | null
          post_count?: number | null
          postal_code_count?: number | null
          product_count?: number | null
          strain_count?: number | null
          user_count?: number | null
        }
        Relationships: []
      }
      us_locations: {
        Row: {
          city: string | null
          classification: string | null
          date_created: string
          date_updated: string
          id: number
          latitude: number | null
          longitude: number | null
          population: number | null
          state: string | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          classification?: string | null
          date_created?: string
          date_updated?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
          population?: number | null
          state?: string | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          classification?: string | null
          date_created?: string
          date_updated?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
          population?: number | null
          state?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      user_brand_admins: {
        Row: {
          brand_id: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          brand_id?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          brand_id?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_brand_admins_brand_id_fkey"
            columns: ["brand_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_brand_admins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          banner_id: string | null
          birthday: string | null
          claimed: boolean | null
          contact_email: string | null
          contact_phone: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          desktop_banner_id: string | null
          email: string | null
          facebook: string | null
          follower_count: number
          following_count: number
          founded_date: string | null
          fts: unknown | null
          home_locale_id: number | null
          home_location: string | null
          id: string
          instagram: string | null
          last_location: number | null
          last_login: string | null
          like_count: number
          linkedin: string | null
          list_count: number
          name: string | null
          phone: string | null
          post_count: number
          product_count: number | null
          profile_picture_id: string | null
          reminder_count: number
          restash_count: number | null
          reviewed: boolean | null
          role_id: number | null
          slug: string | null
          stash_count: number
          status: string
          tiktok: string | null
          twitter: string | null
          username: string | null
          verified: boolean | null
          website: string | null
          youtube: string | null
        }
        Insert: {
          banner_id?: string | null
          birthday?: string | null
          claimed?: boolean | null
          contact_email?: string | null
          contact_phone?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          desktop_banner_id?: string | null
          email?: string | null
          facebook?: string | null
          follower_count?: number
          following_count?: number
          founded_date?: string | null
          fts?: unknown | null
          home_locale_id?: number | null
          home_location?: string | null
          id?: string
          instagram?: string | null
          last_location?: number | null
          last_login?: string | null
          like_count?: number
          linkedin?: string | null
          list_count?: number
          name?: string | null
          phone?: string | null
          post_count?: number
          product_count?: number | null
          profile_picture_id?: string | null
          reminder_count?: number
          restash_count?: number | null
          reviewed?: boolean | null
          role_id?: number | null
          slug?: string | null
          stash_count?: number
          status?: string
          tiktok?: string | null
          twitter?: string | null
          username?: string | null
          verified?: boolean | null
          website?: string | null
          youtube?: string | null
        }
        Update: {
          banner_id?: string | null
          birthday?: string | null
          claimed?: boolean | null
          contact_email?: string | null
          contact_phone?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          desktop_banner_id?: string | null
          email?: string | null
          facebook?: string | null
          follower_count?: number
          following_count?: number
          founded_date?: string | null
          fts?: unknown | null
          home_locale_id?: number | null
          home_location?: string | null
          id?: string
          instagram?: string | null
          last_location?: number | null
          last_login?: string | null
          like_count?: number
          linkedin?: string | null
          list_count?: number
          name?: string | null
          phone?: string | null
          post_count?: number
          product_count?: number | null
          profile_picture_id?: string | null
          reminder_count?: number
          restash_count?: number | null
          reviewed?: boolean | null
          role_id?: number | null
          slug?: string | null
          stash_count?: number
          status?: string
          tiktok?: string | null
          twitter?: string | null
          username?: string | null
          verified?: boolean | null
          website?: string | null
          youtube?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_banner_id_foreign"
            columns: ["banner_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_desktop_banner_id_foreign"
            columns: ["desktop_banner_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_home_locale_id_fkey"
            columns: ["home_locale_id"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_last_location_foreign"
            columns: ["last_location"]
            referencedRelation: "postal_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_profile_picture_id_foreign"
            columns: ["profile_picture_id"]
            referencedRelation: "cloud_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      _clean_up_relationships: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      _latitudeondispensary: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      _latitudeonpost: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      _longitudeondispensary: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      _longitudeonpost: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      _postal_codes_on_region: {
        Args: {
          rec: unknown
        }
        Returns: unknown
      }
      _products_added_to_list_notification: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      _restash_notification: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      _select_contest_winners: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      _sub_product_count: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      _typesense_delete: {
        Args: {
          id: string
          collection: string
        }
        Returns: undefined
      }
      _typesense_import: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      _unread_notification_count: {
        Args: {
          rec: unknown
        }
        Returns: number
      }
      check_if_deal_expired: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      check_notifications: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      count_estimate: {
        Args: {
          query: string
        }
        Returns: number
      }
      cube:
        | {
            Args: {
              "": number[]
            }
            Returns: unknown
          }
        | {
            Args: {
              "": number
            }
            Returns: unknown
          }
      cube_dim: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      cube_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_is_point: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      cube_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      cube_size: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      delete_list: {
        Args: {
          lid: string
        }
        Returns: undefined
      }
      delete_post: {
        Args: {
          pid: string
        }
        Returns: undefined
      }
      earth: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      flag_post: {
        Args: {
          pid: string
          uid: string
        }
        Returns: undefined
      }
      fn_clean_up_cloud_files: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      fn_delete_post: {
        Args: {
          post_id: string
        }
        Returns: undefined
      }
      fn_giveaway_input_push: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      fn_lookup_location_by_geometry: {
        Args: {
          locale_geom: unknown
        }
        Returns: Json
      }
      fn_lookup_location_for_post:
        | {
            Args: {
              locale_geom: unknown
            }
            Returns: number
          }
        | {
            Args: {
              post_id: string
              locale_geom: unknown
            }
            Returns: undefined
          }
      fn_postal_tasks: {
        Args: {
          post_id: string
          message: string
        }
        Returns: undefined
      }
      fn_postgis_encode: {
        Args: {
          long: number
          lat: number
        }
        Returns: string
      }
      fn_schema_fields: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      fn_schema_types: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      fn_update_schema: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      fn_update_tasks: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      gc_to_sec: {
        Args: {
          "": number
        }
        Returns: number
      }
      generate_randome_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_username: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_active_categories: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_feed: {
        Args: {
          uid: string
          ids?: string[]
        }
        Returns: Json
      }
      get_trending_hashtags: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_trending_lists: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_trending_relations: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_trending_stash: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_unread_notification_count: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_user_follower_count: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_users_for_lists_products: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_users_for_posts_products: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      graphql_request: {
        Args: {
          query: string
          variables?: Json
        }
        Returns: Json
      }
      is_json: {
        Args: {
          input_text: string
        }
        Returns: boolean
      }
      latitude: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      longitude: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      mark_notifications_as_read: {
        Args: {
          uid: string
        }
        Returns: undefined
      }
      merge_user_accounts: {
        Args: {
          from_id: string
          to_id: string
        }
        Returns: undefined
      }
      product_search: {
        Args: {
          search_terms?: string
          brand_ids?: string
          category_ids?: string
          selected_ids?: string
          s_limit?: number
          s_offset?: number
        }
        Returns: Json
      }
      sec_to_gc: {
        Args: {
          "": number
        }
        Returns: number
      }
      select_giveaway_contest_winner: {
        Args: {
          gid: string
        }
        Returns: undefined
      }
      send_email_mailgun: {
        Args: {
          message: Json
        }
        Returns: Json
      }
      send_email_message: {
        Args: {
          message: Json
        }
        Returns: Json
      }
      send_push_noti: {
        Args: {
          message: string
          devices: Json
          data_type: string
          campaign: string
          app_url: string
        }
        Returns: string
      }
      slugify: {
        Args: {
          value: string
        }
        Returns: string
      }
      slugify_varchar: {
        Args: {
          v: string
        }
        Returns: string
      }
      unaccent: {
        Args: {
          "": string
        }
        Returns: string
      }
      unaccent_init: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      t: {
        a: number
        b: string
      }
    }
  }
}

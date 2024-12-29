const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId1: String(import.meta.env.VITE_APPWRITE_COLLECTION1_ID),
    appwriteCollectionId2: String(import.meta.env.VITE_APPWRITE_COLLECTION2_ID),
    appwriteBucketId1: String(import.meta.env.VITE_APPWRITE_BUCKET1_ID),
    appwriteBucketId2: String(import.meta.env.VITE_APPWRITE_BUCKET2_ID),
    tinyMCEApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
    adminId: String(import.meta.env.VITE_ADMIN_ID)

}

export default conf
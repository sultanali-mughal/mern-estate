import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next)=>{
try {
    const listing = await Listing.create(req.body);
    return res.status (201).json(listing);
} catch (error) {
    next(error);
    
}    
};
// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.


nums1 = [2,2,1]

nums2 = [4,1,2,1,2]

nums3 = [1]


var singleNumber = function(nums) {
    
    if(nums.length == 1){
        return nums
    }

    let result = 0

    for(let num of nums){
        result ^= num
    }

    return result
};

console.log(singleNumber(nums1))
console.log(singleNumber(nums2))
console.log(singleNumber(nums3))
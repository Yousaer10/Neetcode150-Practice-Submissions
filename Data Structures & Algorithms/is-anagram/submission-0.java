class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> sAnagram = new HashMap<>();
        HashMap<Character, Integer> tAnagram = new HashMap<>();
        if (s.length() == t.length()) {
            for (int i = 0; i < s.length(); i++) {
                sAnagram.put(s.charAt(i), sAnagram.getOrDefault(s.charAt(i), 0) + 1);
                tAnagram.put(t.charAt(i), tAnagram.getOrDefault(t.charAt(i), 0) + 1);
            }
            return sAnagram.equals(tAnagram);
        }
        return false;
    }
}

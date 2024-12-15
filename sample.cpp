#include<bits/stdc++.h>
using namespace std;

int maximumrevenue(vector<int> s){
    int ans  = 0;
    for(int i = 0;i<s.size();i++){
        int k = s[i];
        for(int j = i+1;j<s.size();j++){
            ans += abs(k-s[j]);
        }
    }
    return ans;
}


int main(){
    int n;
    cin >> n;
    vector<int> strength(n);
    for(int i = 0;i<n;i++){
        cin>> strength[i];
    }    
    cout<< maximumrevenue(strength);

return 0;
}
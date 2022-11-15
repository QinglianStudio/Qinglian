# -*- coding: utf-8 -*-

import jieba
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.cluster import KMeans


class KmeansClustering():
    def __init__(self, stopwords_path=None):
        self.vectorizer = CountVectorizer()
        self.transformer = TfidfTransformer()

    def get_text_tfidf_matrix(self, corpus):
        """
        获取tfidf矩阵
        :param corpus:
        :return:
        """
        tfidf = self.transformer.fit_transform(self.vectorizer.fit_transform(corpus))

        # 获取词袋中所有词语
        # words = self.vectorizer.get_feature_names()

        # 获取tfidf矩阵中权重
        weights = tfidf.toarray()
        return weights

    def kmeans(self, corpus, n_clusters=5):
        """
        KMeans文本聚类
        :param n_clusters: ：聚类类别数目
        :return: {cluster_id1:[text_id1, text_id2]}
        """

        weights = self.get_text_tfidf_matrix(corpus)

        clf = KMeans(n_clusters=n_clusters)

        # clf.fit(weights)

        y = clf.fit_predict(weights)

        # 中心点
        # centers = clf.cluster_centers_

        # 用来评估簇的个数是否合适,距离约小说明簇分得越好,选取临界点的簇的个数
        # score = clf.inertia_

        # 每个样本所属的簇
        result = {}
        for text_idx, label_idx in enumerate(y):
            if label_idx not in result:
                result[label_idx] = [corpus[text_idx]]
            else:
                result[label_idx].append(corpus[text_idx])
        return result


if __name__ == '__main__':
    n_clusters = 3
    corpus = [
        "sha256:dnwaioudhnawioun1231231dasaw", "sha256:123saasc124",
        "dwadaw-1567dawd-dwad13-1564", "sha256:dwad21213sdaawda", "11111-333412sda-dawasxa-1564",
        "123-333412sda-123-a12x",
        "dawdwadawdasdniawodna", "12312dsadq",
    ]
    Kmeans = KmeansClustering()
    result = Kmeans.kmeans(corpus=corpus, n_clusters=n_clusters)
    print("共有%d组" % (n_clusters))
    for index in range(0, n_clusters):
        print("第%d组为：%s" % (index, result[index]))
